// Função para validar o login
function validateLogin() {
    // Obter os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verificar se os campos estão preenchidos
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Verificar as credenciais
    // Neste exemplo, estamos usando 'admin' como usuário e '123456' como senha
    if (username === 'admin' && password === '123456') {
        alert('Login com sucesso!');
        // Aqui você poderia redirecionar para outra página após o login
        // window.location.href = 'pagina-principal.html';
    } else {
        alert('Erro ao logar! Usuário ou senha incorretos.');
        // Limpar os campos após tentativa de login mal sucedida
        document.getElementById('password').value = '';
    }
}