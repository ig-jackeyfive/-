<template>
    <div class="index">
        <!-- :style="{height:mainHeight+'px',width:mainWidth+'px'}" -->
        <div class="header-top"></div>
        <h1 style="font-size:70px;margin:20px auto;color:#ec9bad">CodeShare</h1>
        <h2>
            创建并分享代码
<br />
        </h2>

        <!-- 白色边框大盒子 -->
        <div class="code">
            <!-- 配置部分 -->
            <div class="header">
                <!-- 主题选择 -->
                <div class="theme border">
                    <div class="themeIcon" title="主题">
                        <svg
                            t="1619172508155"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2252"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M0 128.115398C0 57.359217 57.372907 0 128.115398 0L310.741745 0C381.497926 0 438.857143 57.372907 438.857143 128.115398L438.857143 310.741745C438.857143 381.497926 381.484236 438.857143 310.741745 438.857143L128.115398 438.857143C57.359217 438.857143 0 381.484236 0 310.741745L0 128.115398ZM0 713.258253C0 642.502074 57.372907 585.142857 128.115398 585.142857L310.741745 585.142857C381.497926 585.142857 438.857143 642.515763 438.857143 713.258253L438.857143 895.884602C438.857143 966.640781 381.484236 1024 310.741745 1024L128.115398 1024C57.359217 1024 0 966.627091 0 895.884602L0 713.258253ZM585.142857 128.115398C585.142857 57.359217 642.515763 0 713.258253 0L895.884602 0C966.640781 0 1024 57.372907 1024 128.115398L1024 310.741745C1024 381.497926 966.627091 438.857143 895.884602 438.857143L713.258253 438.857143C642.502074 438.857143 585.142857 381.484236 585.142857 310.741745L585.142857 128.115398ZM585.142857 713.258253C585.142857 642.502074 642.515763 585.142857 713.258253 585.142857L895.884602 585.142857C966.640781 585.142857 1024 642.515763 1024 713.258253L1024 895.884602C1024 966.640781 966.627091 1024 895.884602 1024L713.258253 1024C642.502074 1024 585.142857 966.627091 585.142857 895.884602L585.142857 713.258253Z"
                                p-id="2253"
                                fill="#ffffff"
                            />
                        </svg>
                    </div>
                    <select
                        id="theme"
                        style="width:210px;border:none"
                        value="base"
                        @change="changeTheme"
                    >
                        <option value="base">base</option>
                        
                  <option value="dark">dark</option>
                        <option value="funky">funky</option>
                        <option value="okaidia">okaidia</option>
                        <option value="solarizedlight">solarizedlight</option>
                        <option value="tomorrow">tomorrow</option>
                        <option value="twilight">twilight</option>
                    </select>
                </div>

                <!-- 代码背景颜色选择 -->
                <div class="language border">
                    <div class="themeIcon" title="代码背景颜色">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                        >
                            <path
                                d="M13.1206 10.2309C12.8886 10.0164 12.5476 9.96367 12.2558 9.91445C11.8515 9.84766 11.6968 9.77383 11.4612 9.56289C10.9585 9.11641 10.9585 8.46953 11.4612 8.02305L12.5265 7.07734C14.1577 5.63594 14.1577 3.27344 12.5265 1.83203C11.3241 0.773828 9.71045 0.25 8.0335 0.25C6.07529 0.25 4.0292 0.963672 2.45068 2.36289C-0.484863 4.95742 -0.484863 9.20781 2.45068 11.8023C3.90967 13.0926 5.87842 13.7359 7.82607 13.75H7.88584C9.8335 13.75 11.753 13.1207 13.1171 11.9078C13.6233 11.4613 13.539 10.6211 13.1206 10.2309ZM2.21865 5.59375C2.21865 4.97148 2.72139 4.46875 3.34365 4.46875C3.96592 4.46875 4.46865 4.97148 4.46865 5.59375C4.46865 6.21602 3.96592 6.71875 3.34365 6.71875C2.72139 6.71875 2.21865 6.21602 2.21865 5.59375ZM3.6249 10.0234C3.00264 10.0234 2.4999 9.5207 2.4999 8.89844C2.4999 8.27617 3.00264 7.77344 3.6249 7.77344C4.24717 7.77344 4.7499 8.27617 4.7499 8.89844C4.7499 9.5207 4.24717 10.0234 3.6249 10.0234ZM5.8749 4.36328C5.25264 4.36328 4.7499 3.86055 4.7499 3.23828C4.7499 2.61602 5.25264 2.11328 5.8749 2.11328C6.49717 2.11328 6.9999 2.61602 6.9999 3.23828C6.9999 3.86055 6.49717 4.36328 5.8749 4.36328ZM8.40615 12.0625C7.47451 12.0625 6.71865 11.3066 6.71865 10.375C6.71865 9.44336 7.47451 8.6875 8.40615 8.6875C9.33779 8.6875 10.0937 9.44336 10.0937 10.375C10.0937 11.3066 9.33779 12.0625 8.40615 12.0625ZM9.2499 4.75C8.62764 4.75 8.1249 4.24727 8.1249 3.625C8.1249 3.00273 8.62764 2.5 9.2499 2.5C9.87217 2.5 10.3749 3.00273 10.3749 3.625C10.3749 4.24727 9.87217 4.75 9.2499 4.75Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div style>
                        <colorPicker
                            :width="40"
                            :height="40"
                            v-model="codeColor"
                            defaultColor="rgb(1, 22, 39)"
                            v-on:change="handleChangeColor"
                        />
                    </div>
                </div>
                <!-- 图片背景颜色选择 -->
                <div class="bgcolor border">
                    <div class="themeIcon" title="图片背景颜色">
                        <svg
                            t="1619174893407"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="3201"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M512 0a512 512 0 0 0 0 1024c180.224 0-110.592-204.8 204.8-204.8a302.08 302.08 0 0 0 307.2-307.2A512 512 0 0 0 512 0zM179.2 486.4A76.8 76.8 0 1 1 256 409.6a76.8 76.8 0 0 1-76.8 76.8zM358.4 307.2a76.8 76.8 0 1 1 76.8-76.8A76.8 76.8 0 0 1 358.4 307.2z m307.2 0a76.8 76.8 0 1 1 76.8-76.8A76.8 76.8 0 0 1 665.6 307.2z m179.2 179.2A76.8 76.8 0 1 1 921.6 409.6a76.8 76.8 0 0 1-76.8 76.8z"
                                p-id="3202"
                                fill="#ffffff"
                            />
                        </svg>
                    </div>
                    <colorPicker
                        :width="40"
                        :height="40"
                        v-model="imgColor"
                        defaultColor="#fff"
                        v-on:change="handleChangeColor"
                    />
                </div>
                <!-- 导出图片 -->
                <div class="export border">
                    <div class="themeIcon" title="导出图片">
                        <svg
                            t="1619175048220"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4018"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M562.996016 643.229748V72.074369a50.996016 50.996016 0 0 0-101.992032 0v571.155379a50.996016 50.996016 0 0 0 101.992032 0z"
                                fill="#ffffff"
                                p-id="4019"
                            />
                            <path
                                d="M513.087915 144.080744L802.337317 432.446215a50.996016 50.996016 0 0 0 71.93838-72.210358L513.087915 0 149.588313 362.411687A50.996016 50.996016 0 0 0 221.594688 434.486056L513.087915 144.148738zM53.035857 643.229748v184.537583c0 109.471448 105.255777 192.832935 230.026029 192.832935h457.876228c124.770252 0 230.026029-83.361487 230.026029-192.832935V643.229748a50.996016 50.996016 0 1 0-101.992031 0v184.537583c0 47.256308-55.075697 90.840903-128.033998 90.840903H283.061886c-72.9583 0-128.033997-43.65259-128.033998-90.840903V643.229748a50.996016 50.996016 0 0 0-101.992031 0z"
                                fill="#ffffff"
                                p-id="4020"
                            />
                        </svg>
                    </div>
                    <div class="exportbtn" @click="exportImg">导出图片</div>
                </div>
                <div class="export border">
                    <div class="themeIcon" title="导出图片">
                        <svg
                            t="1619175048220"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4018"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M562.996016 643.229748V72.074369a50.996016 50.996016 0 0 0-101.992032 0v571.155379a50.996016 50.996016 0 0 0 101.992032 0z"
                                fill="#ffffff"
                                p-id="4019"
                            />
                            <path
                                d="M513.087915 144.080744L802.337317 432.446215a50.996016 50.996016 0 0 0 71.93838-72.210358L513.087915 0 149.588313 362.411687A50.996016 50.996016 0 0 0 221.594688 434.486056L513.087915 144.148738zM53.035857 643.229748v184.537583c0 109.471448 105.255777 192.832935 230.026029 192.832935h457.876228c124.770252 0 230.026029-83.361487 230.026029-192.832935V643.229748a50.996016 50.996016 0 1 0-101.992031 0v184.537583c0 47.256308-55.075697 90.840903-128.033998 90.840903H283.061886c-72.9583 0-128.033997-43.65259-128.033998-90.840903V643.229748a50.996016 50.996016 0 0 0-101.992031 0z"
                                fill="#ffffff"
                                p-id="4020"
                            />
                        </svg>
                    </div>
<!-- //空白符号别删 -->
                    <el-popover placement="top-start" title="


⠀图片短链接:" width="300" trigger="hover">
                        <el-input id="url" :value="url" />
                        <el-button style="margin-top:10px" class="exportbtn" @click="copyUrl">复制短链接</el-button>
                        <div class="exportbtn" slot="reference" @click="exportlink">导出短链接</div>
                    </el-popover>
                </div>
            </div>

            <!-- 导出的html部分 -->
            <div class="main" ref="content">
                <div class="codeText">
                    <div class="title">
                        <div class="svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="54"
                                height="14"
                                viewBox="0 0 54 14"
                            >
                                <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                                    <circle
                                        cx="6"
                                        cy="6"
                                        r="6"
                                        fill="#FF5F56"
                                        stroke="#E0443E"
                                        stroke-width=".5"
                                    />
                                    <circle
                                        cx="26"
                                        cy="6"
                                        r="6"
                                        fill="#FFBD2E"
                                        stroke="#DEA123"
                                        stroke-width=".5"
                                    />
                                    <circle
                                        cx="46"
                                        cy="6"
                                        r="6"
                                        fill="#27C93F"
                                        stroke="#1AAB29"
                                        stroke-width=".5"
                                    />
                                </g>
                            </svg>
                        </div>
                        <input
                            aria-label="Image Title"
                            type="text"
                            spellcheck="false"
                            class="jsx-324272986"
                            v-model="title"
                        />
                    </div>
                    <div class="text">
                        <prism-editor
                            class="my-editor"
                            v-model="html"
                            language="java"
                            :highlight="highlighter"
                            line-Numbers
                        ></prism-editor>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { addText } from "../api/index.js";

// import html2canvas from "html2canvas";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere
// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css"; // import syntax highlighting styles

// import 'prismjs/themes/prism-coy.css';
import 'prismjs/themes/prism-funky.css';
// import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/themes/prism-solarizedlight.css';

// import 'prismjs/themes/prism-twilight.css';

// import 'prismjs/themes/prism-dark.css';
// import "prismjs/themes/prism.css" ;
// import "prismjs/themes/prism-tomorrow.css";

import { base64ToBlob } from "../utils/index.js";

export default {
    name: "Home",
    components: { PrismEditor },
    data() {
        return {
            visible: false,
            html: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`,
                title:'',
            string: "",
            color: "",
            codeColor: "",
            imgColor: "",
            themes: ["213"], //主题
            mainWidth: window.innerWidth,
            mainHeight: window.innerHeight,
        };
    },
    computed: {
        url: function () {
            return this.string?"http://81.71.138.29:8091/img/" + this.string.trim():'';
        },
    },

    created() {
        console.log("home");
    },
    mounted() {
                let select=document.getElementById('theme')
        // console.log(this.$route.path.slice(1));
        select.value=this.$route.path.slice(1)
    },
    methods: {
        copyUrl() {
            let p = document.querySelector("#url");
            p.select();
            document.execCommand("Copy");
            this.$message({
                message: "复制成功,短链接已复制到粘贴板！",
                type: "success",
                duration: 5000,
            });
        },
        // /上传代码文本到数据库
        exportlink() {
            addText(this.html).then((res) => {
                console.log(res);
                this.string = res.data;
                console.log("this.string", this.string);
                this.$message({
                    message: "导出短链接成功！",
                    type: "success",
                    duration: 5000,
                });
            });
        },
        //导出图片方法
        exportImg() {
            let main = document.querySelector(".main");
            let title=this.title
            console.log('title',this.title);
            console.log('html',this.html);
            htmlToImage
                .toPng(main,{

                })
                .then(function (imgUrl) {
                //    console.log("imgUrl", imgUrl);
                let blob = base64ToBlob(imgUrl);
                    // console.log(this.html);
                let fileName =title?title:'code';
                // ie11 不支持document.all，用此方式判断ie不适用
                // 用 window.ActiveXObject 判断是否为ie浏览器
                if (window.ActiveXObject !== undefined) {
                    window.navigator.msSaveOrOpenBlob(blob, fileName);
                } else {
                    const _body = document.body || document.documentElement;
                    const aLink = document.createElement("a");
                    aLink.setAttribute("download", fileName);
                    aLink.href = URL.createObjectURL(blob);
                    _body.appendChild(aLink);
                    aLink.click();
                    _body.removeChild(aLink);
                }
                });
            // domtoimage.toPng(main).then((imgUrl) => {
            //     console.log("imgUrl", imgUrl);
            //     let blob = base64ToBlob(imgUrl);

            //     let fileName = "a";
            //     // ie11 不支持document.all，用此方式判断ie不适用
            //     // 用 window.ActiveXObject 判断是否为ie浏览器
            //     if (window.ActiveXObject !== undefined) {
            //         window.navigator.msSaveOrOpenBlob(blob, fileName);
            //     } else {
            //         const _body = document.body || document.documentElement;
            //         const aLink = document.createElement("a");
            //         aLink.setAttribute("download", fileName);
            //         aLink.href = URL.createObjectURL(blob);
            //         _body.appendChild(aLink);
            //         aLink.click();
            //         _body.removeChild(aLink);
            //     }
            // });

            // let width = main.clientWidth;
            // let height = main.clientHeight;
            // // let x=main.getBoundingClientRect().left;
            // // let y=main.getBoundingClientRect().top;
            // console.log(main.getBoundingClientRect().left);
            // console.log(main.getBoundingClientRect().top);
            // console.log(width);
            // console.log(height);
            // html2canvas(this.$refs.content, {
            //     // removeContainer:true,
            //     // width: width,
            //     // heigth: height,
            //     // scrollY:0,
            //     // x:x,
            //     // y:y,
            // }).then((resolve) => {
            //     // html2canvas(this.$refs.content).then(
            //     //     (canvas) => {
            //     //         document.body.appendChild(canvas);
            //     //     }
            //     // );
            //     // console.log("canvas", resolve);
            //     let imgUrl = resolve.toDataURL("image/png"); //此时就得到了dom元素转成了base64的图片
            //     console.log(imgUrl); //data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAF8CAYAAAA3o9

            // let blob = base64ToBlob(imgUrl);

            // let fileName = "a";
            // // ie11 不支持document.all，用此方式判断ie不适用
            // // 用 window.ActiveXObject 判断是否为ie浏览器
            // if (window.ActiveXObject !== undefined) {
            //     window.navigator.msSaveOrOpenBlob(blob, fileName);
            // } else {
            //     const _body = document.body || document.documentElement;
            //     const aLink = document.createElement("a");
            //     aLink.setAttribute("download", fileName);
            //     aLink.href = URL.createObjectURL(blob);
            //     _body.appendChild(aLink);
            //     aLink.click();
            //     _body.removeChild(aLink);
            // }
            // });
        },

        //背景颜色改变
        handleChangeColor() {
            var main = document.querySelector(".main");
            var code = document.querySelector(".codeText");
            var myeditor = document.querySelector(".my-editor");
            console.log(myeditor);
            let color = this.imgColor;
            console.log(color);
            // myeditor.setAttribute('style', "background-color:"+this.imgColor+"!important");
            myeditor.style.setProperty(
                "background-color",
                this.codeColor,
                "important"
            );
            // myeditor.style.backgroundColor=this.codeColor+'!important';
            main.style.backgroundColor = this.imgColor;
            code.style.backgroundColor = this.codeColor;
        },
        //切换主题
        changeTheme() {
            console.log(1);
            var theme = document.getElementById("theme");
            console.log(theme.value);
            // loadjscssfile('../style/prism')
            this.$router.push(`/${theme.value}`);
        },
        highlighter(code) {
            console.log("languages.js", languages.js);
            return highlight(code, languages.js); // languages.<insert language> to return html with markup
        },
    },
};
</script>

<style >
/* colorPicker */
.prism-editor-wrapper .prism-editor__container {
    position: relative;
    text-align: justify;
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
    width: 100%;
}
.m-colorPicker .colorBtn[data-v-29accc04] {
    width: 40px;
    height: 40px;
}
.colorPicker {
    width: 40px;
    height: 40px;
}
/* vue-prism-editor */
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none;
}
body {
    background-color: #000;
}
.index {
    width: 100%;
    height: 100%;
    background-color: #000;
    text-align: center;
    color: #fff;
}
.header-top {
    width: 100%;
    height: 0px;
}
.code {
    /* letter-spacing: 1px; */
    text-align: justify;
    width: 800px;
    min-height: 450px;
    margin: 0 auto;
    padding: 20px 50px;
    border: 4px solid #fff;
    border-radius: 10px;
}

.header {
    padding:  10px 0 20px;
    display: flex;
    height: 40px;
    /* //项目在主轴上的对齐方式。 */
    justify-content: space-between;
}

.border {
    border: 2px solid #ccc;
    border-radius: 5px;
}

.theme {
    width: 250px;
    display: flex;
}

.themeIcon {
    width: 40px;
    height: 38px;
    text-align: center;
    line-height: 40px;
    border-right: 1px solid #fff;
}

.language {
    width: 80px;
    display: flex;
    text-align: center;
    line-height: 38px;
}

.bgcolor {
    width: 80px;
    display: flex;
    text-align: center;
    line-height: 38px;
}

.export {
    width: 150px;
    height: 38px;
    display: flex;
    text-align: center;
    line-height: 38px;
}

.exportbtn {
    cursor: pointer;
    width: 100px;
}

.copybtn {
    border: 1px solid #fff;
    cursor: pointer;
    width: 50px;
    border-radius: 10%;
}

.main {
    width: 800px;
    min-height: 360px;
    background-color: #fff;
    margin: 0 ;
    overflow: hidden;
}

.codeText {
    border-radius: 5px;
    width: 700px;
    padding-right: 10px;
    padding-bottom: 20px;
    min-height: 300px;
    z-index: 99999;
    margin: 30px auto;
    background-color: #2d2d2d;
    /* box-shadow: rgb(0 0 0 / 55%) 0px 20px 68px; */
}

.title {
    padding: 10px;
    height: 25px;
    display: flex;
    text-align: center;
}

.svg {
    padding-left: 10px;
    line-height: 25px;
    height: 25px;
}

input.jsx-324272986 {
    text-decoration: #fff;
    margin-left: 140px;
    width: 250px;
    background: none;
    outline: none;
    border: none;
    text-align: center;
    max-width: calc(100% - 140px);
    font-size: 14px;
    color: rgb(255, 255, 255);
}
</style>
