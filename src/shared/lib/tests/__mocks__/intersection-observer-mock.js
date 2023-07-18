const mock = function () {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn(),
  };
};

window.IntersectionObserver = mock;
