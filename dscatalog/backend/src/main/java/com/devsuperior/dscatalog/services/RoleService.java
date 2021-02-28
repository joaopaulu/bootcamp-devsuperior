package com.devsuperior.dscatalog.services;

import com.devsuperior.dscatalog.config.Mapper;
import com.devsuperior.dscatalog.dto.RoleDTO;
import com.devsuperior.dscatalog.entities.Role;
import com.devsuperior.dscatalog.mappers.RoleMapper;
import com.devsuperior.dscatalog.repositories.RoleRepository;
import com.devsuperior.dscatalog.services.exceptions.ResourceNotFoundException;
import com.devsuperior.dscatalog.services.iface.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {

    @Autowired
    private RoleRepository repository;

    @Override
    @Transactional(readOnly = true)
    public Page<RoleDTO> findAllPaged(PageRequest pageRequest){
        Page<Role> list = repository.findAll(pageRequest);
        return list.map(RoleDTO::new);
    }

    @Override
    @Transactional(readOnly = true)
    public RoleDTO findById(Long id) {
        Optional<Role> obj = repository.findById(id);
        Role entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return Mapper.factory(RoleMapper.class).entityToDto(entity);
    }

    @Override
    public RoleDTO insert(RoleDTO dto) {
        return null;
    }

    @Override
    public RoleDTO update(Long id, RoleDTO dto) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }


}
