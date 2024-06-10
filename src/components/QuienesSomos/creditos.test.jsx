import React from 'react';
import { render } from '@testing-library/react';
import Creditos from '@/components/QuienesSomos/Creditos';

describe('Creditos', () => {
  it('renders without crashing', () => {
    render(<Creditos />);
  });

  it('displays the correct heading', () => {
    const { getByText } = render(<Creditos />);
    const heading = getByText('Vehículos públicos y productivos');
    expect(heading).toBeInTheDocument();
  });

  it('displays all the products', () => {
    const { getAllByRole } = render(<Creditos />);
    const products = getAllByRole('img');
    expect(products.length).toBe(6);
  });

  it('displays the product names', () => {
    const { getByText } = render(<Creditos />);
    const productNames = ['Furgonetas', 'Utilitarios', 'Pickup', 'Comerciales de pasajeros', 'Comerciales de carga', 'Vanes'];
    productNames.forEach((name) => {
      const productName = getByText(name);
      expect(productName).toBeInTheDocument();
    });
  });
});