import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('El componente app se renderiza correctamente', () => { 
    test('Se renderiza el componente', () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
 })
