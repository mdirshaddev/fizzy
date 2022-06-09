import renderWithRoute from 'utils/react-testing';

// TODO: Need to write test cases for Routes
/**
 * Test Suite for Testing routes includes
 *
 * * Landing page
 * * 404 page
 */
describe('Routes using Memory Router', () => {
  test('For Landing page', () => {
    const container = renderWithRoute('/');
    expect(container).toBeInTheDocument();
  });

  test('For Unknown path show error page', () => {
    const container = renderWithRoute('/unknown');
    expect(container).toBeInTheDocument();
  });
});
