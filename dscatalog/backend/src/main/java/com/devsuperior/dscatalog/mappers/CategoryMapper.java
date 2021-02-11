package com.devsuperior.dscatalog.mappers;

import com.devsuperior.dscatalog.dto.CategoryDTO;
import com.devsuperior.dscatalog.entities.Category;
import org.mapstruct.Mapper;

@Mapper
public interface CategoryMapper {

    CategoryDTO entityToDto(Category entity);

    Category dtoToEntiCategory(CategoryDTO dto);
}
