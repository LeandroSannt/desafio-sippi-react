import styled from 'styled-components'


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items:stretch;

`
export const Sidebar = styled.div`
    display: grid;
    grid-template-rows: 120px 1fr;

    width: 100%;
    max-width: 250px;
    padding: 0 30px;

    .logo{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
    }

    .menu{
        color: #9bc8a4;
    }

    .footerSidebar{

    .linebottom{
        border-bottom: solid 1px #ACAEAC;
        border-radius: 0;
        padding: 16px;
        &:hover{
            background-color:#fff
        }
    }

    
    }

    .privacity{
        display: flex;
        justify-content:space-between;
        margin: 20px 0;
        

        span{
        font-size: 12px;
        padding: 4px 12px;
        background:#D2D4D2 ;
        cursor: pointer
        }
    }

    .privacity + .privacity{
        margin-right: 5px;
    }



`

export const Header = styled.header`
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