package com.devsuperior.dscatalog.services.iface;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.dto.UriDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.multipart.MultipartFile;

public interface IProductService {

    Page<ProductDTO> findAllPaged(Long categoryId, String name, PageRequest pageRequest);

    ProductDTO findById(Long id);

    ProductDTO insert(ProductDTO dto);

    ProductDTO update(Long id, ProductDTO dto);

    UriDTO uploadFile(MultipartFile file);

    void delete(Long id);
}
