import styled from 'styled-components'

export const FooterStyle = styled.section `

.section_padding{
    padding: 4rem 4rem;
}

.footer{
    background-color: #020202;
}

.sb_footer{
    display: flex;
    flex-direction: column;
}

.sb_footer_links{
    display: flex;
    justify-content: space-between;
    aling-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-aling: left;
    margin-bottom: 2rem
}

.sb_footer_links_div{
    width: 150px;
    margin: 1rem;
    color: white;
}

a{
    color: rgb(175, 175, 179);
    text-decoration: none; 
}

.socialmedia{
    display: flex;
    flex-direction: row;
}

.socialmedia img{
    width: 80%;
}

sb_footer_links_div h4{
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 0.9rem;
}

.sb_footer_links_div p{
    font-size: 12px;
    line-height: 15px;
    margin: 0.5rem 0;
    cursor: pointer;
}

.sb_footer_below{
    display: flex;
    flex-diretcion: row;
    justify-content: space-between;
    margin-top: 0.2rem;
}

.sb_footer_below_links{
    display: flex;
    flex-direction: row;
}

.sb_footer_below_links p{
    font-size: 13px;
    line-height: 15px;
    margin-left: 2rem;
    color: white;
    font-weight: 600;
}

hr{
    color: white !important;
    width:100%;
}

.sb_footer_copyright p {
    font-size: 13px;
    line-heigh: 15px;
    color: rgb(255, 255, 255);
    font-weight: 600;
}

@media screen and (max-width: 850px) {
    .sb_footer_heading h1{
        font-size: 44px;
        line-height: 50px;
    }
}

@media screen and (max-width: 550px){
    .sb_footer_heading h1{
        font-size: 34px;
        line-height: 42px
    }
    
    .sb_footer_links div{
        margin: 1rem 0;
    }

    .sb_footer-btn p {
        font-size: 14px;
        line-height: 20px
    }

    .sb_footer_below{
        flex-direction: column;
        justify-content: left;
    }

    .sb-footer_below_links{
        flex-direction: column;
    }
    
    .sb_footer_below_links p{
        margin-left: 0rem;
        margin-top: 1rem;
    }

@media screen and (max-width: 400px){
    .sb_footer_heading h1{
        font-size: 27px;
        line-height: 38px;
    }
}
}

`