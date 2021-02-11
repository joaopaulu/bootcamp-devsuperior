package com.devsuperior.dscatalog.services.iface;

import com.devsuperior.dscatalog.dto.CategoryDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ICategoryService {

    Page<CategoryDTO> findAllPaged(PageRequest pageRequest);

    CategoryDTO findById(Long id);

    CategoryDTO insert(CategoryDTO dto);

    CategoryDTO update(Long id, CategoryDTO dto);

    void delete(Long id);
}
