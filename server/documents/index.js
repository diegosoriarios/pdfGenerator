module.exports = ({ nome, materia, titulo, conteudo }) => {
   const today = new Date()
   const handleParagrafos = () => {
      const ph = conteudo.replace(/(\r\n|\n|\r)/gm, "<br />");
      return ph
   }
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
               body{
                  height:100vh;
               }
               .invoice-box {
                  width: 93%;
                  margin-left: 5%;
                  padding-top: 5%;
               }
               #content {
                  text-align: justify;
                  font-size: 10px;
               }
               h1 {
                  text-align: center;
               }
          </style>
       </head>
       <body>
          <div class="invoice-box">
            <div id="cabecalho">
               <p>Nome: ${nome}</p>
               <p>Aula: ${materia}</p>
               <p>Data: ${today.getDate()}/ ${today.getMonth()}</p>
            </div>
            <div id="conteudo">
               <h1>${titulo}</h1>
               <div id="content">
                  ${handleParagrafos()}
               </div>
            </div>
         </div>
       </body>
    </html>
    `;
};