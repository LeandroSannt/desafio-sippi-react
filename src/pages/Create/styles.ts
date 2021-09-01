import styled from 'styled-components'
import {shade} from 'polished'



export const Container = styled.div`
    height: 100vh;
    background-color:#fff;
    width:100%;
`

export const Content = styled.div`

        div{
            fieldset{
                border: 0;
                width: 100%;

                h4{
                    font-size:13px;
                    margin-bottom: 5px;
                    color:#8C8C8C ;
                }
                textarea,
                input {
                    background-color:
                    #f8f9fb;
                    border-radius: 4px;
                    padding: 8px 10px;
                    color:#8C8C8C ;
                    border: 0;
                    width: 70%;

                    & + input{
                    margin-top:30px
                    }

                    input:nth-child(2){
                        width:100% !important;
                    }
                    
                }
  
            }   

            fieldset + fieldset {
                margin-left: 20px;
            }

            .fieldset-1{
                margin: 25px 0;
                display: flex;
                max-width:80%;

                input{
                    width: 100%; 
                } 
            }

            .fieldset-3{
                width:100%;

                input{
                    width:100%;
                }
            }

            .textareaField{
                width: 100%;
                margin: 25px 0;
                display: flex;

                fieldset{
                    input{
                        width:100%;
                        padding: 20px;
                        height: 80px;
                    }
                }
            }

            .fieldset-4{
                display: flex;
            }


        }

        .actions{
            width: 100%;
            display: flex;
            justify-content:center;
            align-items:center;
            margin-top: 30px ;
            
           
        }


        input[type="file"] {
        display: none;
    }
    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        width: 100%;
        color:#8C8C8C;
        display: flex;
        place-content: center;
        align-items:center;
        font-size:12px;
        border-radius: 8px;
        transition: background 400ms;


        &:hover{
          background: ${shade(0.2, '#fff')};
        }

        svg{
          margin-right:10px;}
        }

    .file-preview {
      margin: 0 10px;
    }



`
