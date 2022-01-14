const testing = require('./index');
test('adsd 1_2 to equal 3', () => {
    expect(testing.sum(1,2)).toBe(3);
});

test('get About Us Link Spanish Code', () => {
    expect(testing.getAboutUsLink('es-ES')).toBe("about-es");
});

