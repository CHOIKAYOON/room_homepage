import React, { Component } from "react";
import '../Footer/Footer.css';


class Footer extends Component{
    render(){
        return(
            <div className="Footer_Column">
                <div className="Footer_Column_title">
                    <span>중계사무소 가입 및 광고 방법이 궁금하신가요 ?</span>
                    <button>자세히 알아보기 > </button>
                </div>

                <div className="Footer_Coumn_Menu">
                    <div className="Footer_Menu_title">
                        <a href="">
                            회사소개 |
                        </a>

                        <a href="">
                            이용약관 |
                        </a>

                        <a href="">
                            개인정보 처리방침 |
                        </a>

                        <a href="">
                            위치기반 서비스 이용약관 |
                        </a>

                        <a href="">
                            중개사 사이트 바로가기 |
                        </a>
                    </div>
                    <div className="Footer_content">
                        <p>상호 : (주)직방  &nbsp;|&nbsp;  대표 : 안성우  &nbsp;|&nbsp;  사업자등록번호: 120-87-61559</p>
                        <p>주소 : 서울특별시 서초구 서초대로 411, 5층(서초동, GT타워) (우 : 06615)</p>
                        <p>팩스 : 02-568-4908  &nbsp;|&nbsp; </p>
                        <p>통신판매업 신고번호 : 제2020-서울서초-0852호</p>
                        <p>서비스 이용문의 : 1661-8734  &nbsp;|&nbsp;  이메일 : cs@zigbang.com </p>

                        <p>
                            <a href="https://www.facebook.com/zigbangpage">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNB2_hwhZKPw4lglFAlzkBcMhbV9HoDiJRPIF9uHyXfbAwacCA&usqp=CAU" />
                            </a>

                            <a href="https://www.youtube.com/channel/UCiUQWRA_xsGzvNVGFlBKBiQ">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE-heqOWacv1J7aj9jwbbqo0W43jMzRL6oeZvyQeNYSFIhIZSO&usqp=CAU" />
                            </a>

                            <a href="http://blog.naver.com/zigbang?proxyReferer=">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjqvKKjvJ2QNH53V_dbJ25eSf84lU0iVTWKD7-hSC3sWeur4Af&usqp=CAU" />
                            </a>

                            <a href="https://post.naver.com/zigbang">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPuPqJq3sE9yJIpbz5-mLRfouI6XeUvQ8pDXcV2RoaiocrfF44&usqp=CAU" />
                            </a>
                        </p>
                        <p> Copyright © ZIGBANG. All Rights Reserved. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;