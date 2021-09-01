import styled from 'styled-components'

export const Head = styled.header`
    max-height:100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;

        .intro{
            .section{
                display: flex ;
                align-items: center;

                div{
                    display: flex ;
                    align-items: center;
                    color:#829082;
                    margin-bottom: 10px;

                    
                 svg{
                        margin: 0 10px;
                    }
                }

            }
            h3{
                font-weight: bold;
            }
        }

        .contentUser{
            width: 300px;
            margin-right: 50px;
            display: flex ;
            align-items:center;
            justify-content:space-between;

            .Arrowdown{
                display: flex;
                align-items:center;

                svg{
                    margin-left: 10px;
                }

            }

            h5{
                font-size: 16px;
                font-weight: bold;
                padding:10px;
                background:#D2D4D2;
                border-radius: 50%;
            }

            div{
                span{
                    color:#D2D4D2 ;
                    font-size:12px;
                }
            }


        }

`