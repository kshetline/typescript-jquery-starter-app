describe('main', () => {
  let jqdiv;

  beforeEach(() => {
    const div = document.createElement('div');
    div.setAttribute('id', 'message');
    document.body.appendChild(div);
    jqdiv = $(div);
  });

  afterEach(() => {
    jqdiv.remove();
  });

  it('should say hello', () => {
    require('./main');
    expect(jqdiv.text()).toBe('Hello, world!');
  });
});
