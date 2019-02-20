const element = (
  <footer class="colorlib-footer">
    <div class="container">
      <div class="row row-padded-bottom">
        <div class="col-md-6">
          <h3>Vamos conversar</h3>
          <p>Para um resultado de sucesso, é necessário maturar muito bem seu projeto, que talvez, no momento se trate apenas de uma ideia. Com isso, me passe essa primeira mensagem e muito em breve entrarei em contato com você.</p>
          <p class="btn-footer"><a href="contact.html">Conte-me sobre o seu projeto</a></p>
        </div>
        <div class="col-md-6 info">
          <h3>Info</h3>
          <p>Email: <strong><a href="#">igormouradev@gmail.com</a></strong></p>
          <p>Phone: <strong><a href="#">+55 (11) 9485-12876</a></strong></p>
          <p class="colorlib-social-icons">
            <span><a href="https://www.linkedin.com/in/mouraigor/" target="_blank"><i class="icon-social-linkedin"></i>Linkedin</a></span>
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row copyright">
        <div class="col-md-4 col-md-offset-4 text-center">
          <p>
            <small class="block">&copy; <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> Todos os direitos reservados. <br >by <a href="https://www.linkedin.com/in/mouraigor/" target="_blank">Igor Moura</a></small> 
          </p>
        </div>
      </div>
    </div>
  </footer>
);

ReactDOM.render(element, document.getElementById('footer'));
