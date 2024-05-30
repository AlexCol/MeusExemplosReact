import { useState } from "react";
import { ImageUpload } from "./ImageUpload"
import { TextStyleConfig } from "./TextStyleConfig"
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content, StyleReference, TDocumentDefinitions } from "pdfmake/interfaces";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const GeneratePDF = () => {
  const [fontSize, setFontSize] = useState<string>("12");
  const [fontColor, setFontColor] = useState<string>("#000000");
  const [isBold, setIsBold] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const generatePdf = () => {
    const customStyle:StyleReference = {
      fontSize: parseInt(fontSize),
      color: fontColor,
      bold: isBold
    };
    
    // Linhas fixas
    const fixedContent:Content = [
      { text: 'Cabeçalho do Documento', fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
      { text: 'Este é um exemplo de linhas fixas no início do documento.', margin: [0, 0, 0, 10] }
    ];

    // Linhas variáveis (caso monte via dados de banco, rlatório, e afins)
    const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const variableLines:Content = meuArray.map(i => ({ text: `Linha variável ${i}`, style: customStyle, margin: [0, 10, 0, 10] })); 

    const docDefinition: TDocumentDefinitions = {
      content: [
        ...fixedContent,
        ...variableLines,
        { text: 'PDF gerado com pdfMake e React!', fontSize: 15 },
        { text: 'Este é um exemplo de documento PDF.', margin: [0, 10, 0, 10] },
        { text: 'Você pode adicionar textos, imagens, tabelas e muito mais.' },
        { text: `Título: ${title}`, style: customStyle },
        { text: `Descrição: ${description}`, style: customStyle },
        image ? {image: image, width: 150} : ''
      ]
    }    
    pdfMake.createPdf(docDefinition).download();
  }  
  
  return (
    <div className="container">
      <label className="label">
        Título:
        <input 
          type="text" 
          className="input" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="label">
        Descrição:
        <input 
          type="text" 
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>      

      <TextStyleConfig 
        fontSize={fontSize}
        setFontSize={setFontSize} 
        fontColor = {fontColor}
        setFontColor = {setFontColor}
        isBold = {isBold}
        setIsBold = {setIsBold}
      />
      <ImageUpload setImage = {setImage}/>
      <button className="button" onClick={generatePdf}>Gerar PDF</button>
    </div>
  )
}
