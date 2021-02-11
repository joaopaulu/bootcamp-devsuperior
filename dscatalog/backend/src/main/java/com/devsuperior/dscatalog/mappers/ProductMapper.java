package com.devsuperior.dscatalog.mappers;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.entities.Product;
import org.mapstruct.Mapper;

@Mapper
public interface ProductMapper {

    Product dtoToEntity(ProductDTO dto);

    ProductDTO entityToDto(Product entity);
}
