package com.devsuperior.dscatalog.services.iface;

import com.devsuperior.dscatalog.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IProductService {

    Page<ProductDTO> findAllPaged(Long categoryId, String name, PageRequest pageRequest);

    ProductDTO findById(Long id);

    ProductDTO insert(ProductDTO dto);

    ProductDTO update(Long id, ProductDTO dto);

    void delete(Long id);
}
