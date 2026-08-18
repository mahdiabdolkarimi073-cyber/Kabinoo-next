'use client';

import React from 'react';
import Image from "next/image";
import AppConfig from "@/config";
import {IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube, IconMail, IconPhone} from '@tabler/icons-react';

function Footer(props: any) {
    return (
        <div className={'bg-black'}>
            <footer className="bg-accent/40 text-gray-300 py-8 md:py-10 px-4 md:px-8 lg:px-16 font-inter mt-8 md:mt-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center justify-between">
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src={'/logo.png'}
                            width={150}
                            height={150}
                            style={{
                                filter: "invert(1)"
                            }}
                            alt={AppConfig.title}
                        />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-xl font-bold mb-4">کابینت و دکوراسیون کابینو</h3>
                        <p className="mb-2">
                            شرکت ما با تخصص در طراحی و ساخت کابینت، کمد و میز، فضای داخلی شما را به شکلی شیک و کاربردی
                            تبدیل می‌کند. با استفاده از متریال باکیفیت و طراحی‌های منحصر به فرد، به نیازهای شما پاسخ
                            می‌دهیم.
                        </p>
                        <p className="mb-2">انواع کابینت و کمد دیواری و دکوراسیون منزل و مغازه</p>
                        <p className="mb-4">اقساط 36 ماهه</p>
                        <div className="flex flex-wrap justify-center gap-3 mb-4">
                            <a href="https://wa.me/989133448865" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                                {/* WhatsApp icon SVG */}
                                <IconBrandWhatsapp/>
                            </a>
                            <a href="tel:09133448865" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                                {/* Phone icon SVG */}
                                <IconPhone/>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kabinoo5960@gmail.com" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                                {/* Envelope icon SVG */}
                                <IconMail/>
                            </a>
                            <a href="https://instagram.com/Ebtekar.5960" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                                {/* Instagram icon SVG */}
                                <IconBrandInstagram/>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                                <IconBrandYoutube/>
                            </a>
                            <a href="https://www.aparat.com/kabioo.ir" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                                <div style={{
                                    width: "20px",
                                    height: "20px"
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.33 68.33">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="brand">
                                                <g id="icon--white" fill="#fff">
                                                    <path
                                                        d="M29.49,2,23.2.36A10.58,10.58,0,0,0,10.25,7.87L8.68,13.8A32.4,32.4,0,0,1,29.49,2Z"/>
                                                    <path
                                                        d="M1.9,39.33.36,45.14A10.58,10.58,0,0,0,7.87,58.08l6,1.6A32.41,32.41,0,0,1,1.9,39.33Z"/>
                                                    <path
                                                        d="M60.46,10.25,53.73,8.46a32.4,32.4,0,0,1,12.4,21.7l1.85-7A10.58,10.58,0,0,0,60.46,10.25Z"/>
                                                    <path className="cls-1" fill="#fff"
                                                          d="M38.69,66.26,45.14,68a10.58,10.58,0,0,0,12.94-7.51l1.82-6.84A32.42,32.42,0,0,1,38.69,66.26Z"/>
                                                    <path
                                                        d="M34.17,4.54A29.63,29.63,0,1,0,63.79,34.17,29.63,29.63,0,0,0,34.17,4.54ZM17.39,19.32a8.46,8.46,0,1,1,6.71,9.91A8.46,8.46,0,0,1,17.39,19.32ZM29.7,44.92A8.46,8.46,0,1,1,23,35,8.46,8.46,0,0,1,29.7,44.92Zm3.59-6.85a3.76,3.76,0,1,1,4.41-3A3.76,3.76,0,0,1,33.29,38.07ZM50.94,49a8.46,8.46,0,1,1-6.71-9.91A8.46,8.46,0,0,1,50.94,49Zm-5.6-15.68a8.46,8.46,0,1,1,9.91-6.71A8.46,8.46,0,0,1,45.34,33.33Z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <p className="text-sm">آدرس: کرمان، جنب پل سیدی، نبش خیابان آسمان</p>
                        <p className={'text-xs'}>کدپستی 7615118839</p>
                    </div>
                    <div className={'h-full flex justify-end flex-col gap-3'}>
                        <div className={'flex items-center flex-col justify-center xl:flex-row-reverse '}>
                            <div className="flex flex-col items-center md:items-end text-center md:text-right">
                                <a href="tel:09133448865" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center mb-2 hover:underline">
                                    <span className="ml-2 text-lg">09133448865</span>
                                    <IconPhone/>
                                </a>
                                <a href="tel:09136645960" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center mb-2 hover:underline">
                                    <span className="ml-2 text-lg">09136645960</span>
                                    <IconPhone/>
                                </a>
                                <a href="https://instagram.com/Ebtekar.5960" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center mb-2 hover:underline">
                                    <span className="ml-2 text-lg">Ebtekar.5960</span>
                                    <IconBrandInstagram/>
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kabinoo5960@gmail.com" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center hover:underline">
                                    <span className="ml-2 text-lg" dir="ltr">kabinoo5960@gmail.com</span>
                                    <IconMail/>
                                </a>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3443.249559235885!2d57.09958007556523!3d30.34385667477419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDIwJzM3LjkiTiA1N8KwMDYnMDcuOCJF!5e0!3m2!1sen!2sde!4v1758346668351!5m2!1sen!2sde"
                                className={'w-40 h-40 md:w-46 md:h-46 mx-auto rounded-xl overflow-hidden '}
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className={'flex lg:justify-end justify-center'}>
                            <a referrerPolicy='origin' target='_blank'
                               href='https://trustseal.enamad.ir/?id=643373&Code=VkzVIU4pfYJhaf7eUcxZiBqoYru46pId'>
                                <img
                                    referrerPolicy='origin'
                                    src={"/design/enamad-test.png"}
                                    alt=''
                                    style={{
                                        cursor: "pointer",
                                        height: "100px"
                                    }}
                                    //@ts-ignore
                                    code='VkzVIU4pfYJhaf7eUcxZiBqoYru46pId'/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-600 mt-6 md:mt-8 pt-4 text-sm text-gray-400">
                    <div className=" flex items-center justify-between gap-4 flex-col lg:flex-row lg:px-20 p-3 md:p-5 mx-auto">
                        <a href="https://novinbin.com" target='_blank'>
                            <p>طراحی سایت توسط مهندسی نوآوران نوین بین</p>
                        </a>
                        <p className='text-center'>هرگونه کپی برداری از این سایت بدون ذکر منبع غیر مجاز بوده و پیگرد
                            قانونی دارد.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;