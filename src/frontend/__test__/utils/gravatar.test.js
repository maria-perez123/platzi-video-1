import gravatar from '../../utils/gravatar';

test('Gravatar function test', ()=>{
    const email='maria_erez@hotmail.es';
    const gravatarUrl='https://gravatar.com/avatar/569c6d893d7a887d8381fa5646f56428'
    expect(gravatarUrl).toEqual(gravatar(email));
})