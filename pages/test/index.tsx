// import Layout from "@/components/Layouts";
// import MyDocument from "@/components/html";
// import TestHome from "@/components/test";
// import { PDFViewer } from "@react-18-pdf/renderer";
// import { useEffect, useState } from "react";


// function getImageUrl(arr: ArrayBuffer, name: string, mimetype: string) {
//     const buf = Buffer.from(arr);
//     const file = new File([buf], name, { type: mimetype });
//     return URL.createObjectURL(file);
//   }
  
//   interface Img {
//     type: "Buffer";
//     data: ArrayBuffer;
//   }
//   interface ImageModel {
//     id: string | number;
//     createdDate: string;
//     updateDate: string;
//     mimetype: string;
  
//     images?: Img;
//     files?: Img;
//     file?: Img;
//   }

// function Test({ id, images: data, mimetype }: ImageModel){

//     const [_url, _setUrl] = useState<string>("");

//     useEffect(() => {
//         if(data){

//             const url = getImageUrl(data?.data, `image-${id}`, mimetype);
//             _setUrl(url);
//             return () => URL.revokeObjectURL(url);
//         }
//     }, [data?.data]);

//     return(
//         <PDFViewer>
//             <MyDocument/>
//         </PDFViewer>
     
//     )
// }

// export default Test

import { ComponentToPrint } from '@/components/html';
import React, { ReactInstance } from 'react';
import ReactToPrint from 'react-to-print';


class Example extends React.PureComponent {
  componentRef: ReactInstance | null = null ;
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );}


  }

  export default Example