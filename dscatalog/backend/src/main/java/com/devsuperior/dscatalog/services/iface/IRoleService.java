package com.devsuperior.dscatalog.services.iface;

import com.devsuperior.dscatalog.dto.RoleDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IRoleService {

    Page<RoleDTO> findAllPaged(PageRequest pageRequest);

    RoleDTO findById(Long id);

    RoleDTO insert(RoleDTO dto);

    RoleDTO update(Long id, RoleDTO dto);

    void delete(Long id);
}
