import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import { makePrivateRequest } from 'core/utils/request';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';

export type FormState = {
  firstName: string;
};

type ParamsType = {
  userId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormState>();
  const history = useHistory();
  const { userId } = useParams<ParamsType>();

  const isEditing = userId !== 'create';
  const formTitle = isEditing ? 'editar usuário' : 'cadastrar um Usuário';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/users/${userId}` }).then(response => {
        setValue('firstName', response.data.firstName);
      });
    }
  }, [userId, isEditing, setValue]);

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: isEditing ? `/users/${userId}` : '/users',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Usuário salvo com sucesso!');
        history.push('/admin/users');
      })
      .catch(() => {
        toast.error('Erro ao salvar usuário!');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title={formTitle}>
        <input
          ref={register({
            required: 'Campo obrigatório',
            minLength: {
              value: 5,
              message: 'O campo deve ter no mínimo 5 caracteres',
            },
            maxLength: {
              value: 60,
              message: 'O campo deve ter no máximo 60 caracteres',
            },
          })}
          type="text"
          name="firstName"
          className="form-control input-base"
          placeholder="Nome do Usuário"
        />
        {errors.firstName && (
          <div className="invalid-feedback d-block">
            {errors.firstName.message}
          </div>
        )}
      </BaseForm>
    </form>
  );
};

export default Form;
