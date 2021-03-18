import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { api } from '../services';
import { ProductCard, SearchInput } from '../components';

import { theme } from '../styles';

const Catalog: React.FC = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdade] = useState(false);

  async function fillProducts() {
    setLoading(true);
    const response = await api.get(
      `/products?page=0&linesPerPage=12&direction=ASC&orderBy=name`,
    );
    setProducts(response.data.content);
    setLoading(false);
  }

  useEffect(() => {
    fillProducts();
  }, []);

  const data =
    search.length > 0
      ? products.filter(product =>
          product.name.toLowerCase().includes(search.toLowerCase()),
        )
      : products;

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      <SearchInput
        placeholder="Nome do Produto"
        search={search}
        setSearch={setSearch}
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        data.map(product => <ProductCard key={product.id} {...product} />)
      )}
    </ScrollView>
  );
};

export default Catalog;
