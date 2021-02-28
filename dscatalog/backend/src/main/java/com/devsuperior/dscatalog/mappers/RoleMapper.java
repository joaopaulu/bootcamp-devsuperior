package com.devsuperior.dscatalog.mappers;

import com.devsuperior.dscatalog.dto.RoleDTO;
import com.devsuperior.dscatalog.entities.Role;
import org.mapstruct.Mapper;

@Mapper
public interface RoleMapper {

    RoleDTO entityToDto(Role entity);

    Role dtoToEntiCategory(RoleDTO dto);
}
