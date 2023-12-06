<template>
    <div class="flex bg-dark-300">
        <div class="flex justify-start items-center relative w-full px-[24px] sm:px-[32px] md:px-[34px] lg:px-[36px] xl:px-[38px] bg-dark-500 shadow-bottom z-[99] rounded-b-2xl border-b border-dark-200">
            <span class="py-3 text-font text-light-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">{{ $t("home.birthday") }} {{ year }}</span>
        </div>
    </div>
    <div class="flex bg-dark-600">
        <div class="flex justify-start items-center w-full gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 relative px-[24px] sm:px-[32px] md:px-[34px] lg:px-[36px] xl:px-[38px] bg-dark-300 shadow-bottom z-[98] rounded-b-2xl border-b border-dark-200">
            <button @click="scroll(index)" v-for="(_, index) in t.bd2023.refs" :key="index" class="my-2 sm:my-3 text-font text-light-500 sm:hover:text-red-600 text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-sm transition">{{ $t('bd2023.refs.' + index) }}</button>
        </div>
    </div>
    <div class="flex bg-dark-500" ref="0">
        <div class="flex flex-col justify-start items-center relative px-[24px] sm:px-[52px] md:px-[54px] lg:px-[56px] xl:px-[58px] bg-dark-600 shadow-bottom z-[97] rounded-b-2xl border-b border-dark-200">
            <hr class="my-2 sm:my-4 lg:my-6">

            <span class="text-font text-center text-light-500 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{{ $t("bd2023.ref0.title") }}</span>
            <hr class="my-2 sm:my-4 lg:my-6">

            <div class="flex justify-between items-center w-full">
                <div class="flex flex-col justify-between items-center h-full">
                    <img src="@/assets/images/bd/2023/0/0.jpg" class="min-w-[50px] h-[50px] sm:min-w-[75px] sm:h-[75px] md:min-w-[100px] md:h-[100px] lg:min-w-[125px] lg:h-[125px] xl:min-w-[175px] xl:h-[175px] 2xl:min-w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[3deg]">
                    <img src="@/assets/images/bd/2023/0/1.jpg" class="min-w-[50px] h-[50px] sm:min-w-[75px] sm:h-[75px] md:min-w-[100px] md:h-[100px] lg:min-w-[125px] lg:h-[125px] xl:min-w-[175px] xl:h-[175px] 2xl:min-w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-7deg]">
                    <img src="@/assets/images/bd/2023/0/2.jpg" class="min-w-[50px] h-[50px] sm:min-w-[75px] sm:h-[75px] md:min-w-[100px] md:h-[100px] lg:min-w-[125px] lg:h-[125px] xl:min-w-[175px] xl:h-[175px] 2xl:min-w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[4deg]">
                </div>
                <div class="flex justify-center flex-wrap gap-x-2 gap-y-1 sm:gap-x-6 sm:gap-y-2 md:gap-x-8 md:gap-y-3 lg:gap-x-10 lg:gap-y-4 xl:gap-x-12 xl:gap-y-5 2xl:gap-x-20 2xl:gap-y-6 px-4 sm:px-7 md:px-10 lg:px-13 xl:px-16">
                    <span v-for="(_, index) in t.bd2023.ref0.adjectives" :key="index" class="text-font text-light-500 text-[6px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-lg">{{ $t('bd2023.ref0.adjectives.' + index) }}</span>
                </div>
                <div class="flex flex-col justify-between items-center h-full">
                    <img src="@/assets/images/bd/2023/0/3.jpg" class="min-w-[50px] h-[50px] sm:min-w-[75px] sm:h-[75px] md:min-w-[100px] md:h-[100px] lg:min-w-[125px] lg:h-[125px] xl:min-w-[175px] xl:h-[175px] 2xl:min-w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-4deg]">
                    <img src="@/assets/images/bd/2023/0/4.jpg" class="min-w-[50px] h-[50px] sm:min-w-[75px] sm:h-[75px] md:min-w-[100px] md:h-[100px] lg:min-w-[125px] lg:h-[125px] xl:min-w-[175px] xl:h-[175px] 2xl:min-w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[7deg]">
                    <img src="@/assets/images/bd/2023/0/5.jpg" class="min-w-[50px] h-[50px] sm:min-w-[75px] sm:h-[75px] md:min-w-[100px] md:h-[100px] lg:min-w-[125px] lg:h-[125px] xl:min-w-[175px] xl:h-[175px] 2xl:min-w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-3deg]">
                </div>
            </div>

            <hr class="my-2 sm:my-4 lg:my-6">
        </div>
    </div>
    <div class="flex bg-dark-600" ref="1">
        <div class="flex flex-col justify-start items-center relative w-full px-[24px] sm:px-[52px] md:px-[54px] lg:px-[56px] xl:px-[58px] bg-dark-500 shadow-bottom z-[96] rounded-b-2xl border-b border-dark-200">
            <hr class="my-2 sm:my-4 lg:my-6">

            <span class="text-font text-center text-light-500 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">{{ $t("bd2023.ref1.title") }}</span>

            <hr class="w-full my-3 sm:my-4 md:my-6 lg:my-8 xl:my-10 border-l border-grey-1000">

            <span v-for="line in splitLines($t('bd2023.ref1.text'))" :key="line" class="text-font text-center text-light-500 sm:text-grey-500 text-[6px] sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {{ line }}<br/>
            </span>

            <hr class="my-2 sm:my-4 lg:my-6">

            <div class="flex justify-between items-center w-full">
                <img src="@/assets/images/bd/2023/1/0.jpg" class="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-4deg]">
                <img src="@/assets/images/bd/2023/1/1.jpg" class="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[7deg]">
                <img src="@/assets/images/bd/2023/1/2.jpg" class="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-3deg]">
                <img src="@/assets/images/bd/2023/1/3.jpg" class="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[4deg]">
                <img src="@/assets/images/bd/2023/1/4.jpg" class="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-7deg]">
                <img src="@/assets/images/bd/2023/1/5.jpg" class="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[3deg]">
                <img src="@/assets/images/bd/2023/1/6.jpg" class="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px] 2xl:w-[175px] 2xl:h-[175px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-4deg]">
            </div>

            <hr class="my-2 sm:my-4 lg:my-6">
        </div>
    </div>
    <div class="flex bg-dark-500" ref="2">
        <div class="flex flex-col justify-start items-center relative w-full px-[24px] sm:px-[52px] md:px-[54px] lg:px-[56px] xl:px-[58px] bg-dark-600 shadow-bottom z-[95] rounded-b-2xl border-b border-dark-200">
            <hr class="my-2 sm:my-4 lg:my-6">

            <div class="flex justify-center items-center sm:px-4 md:px-6 lg:px-8 xl:px-10">
                <div class="flex flex-col justify-center items-center">
                    <span class="text-font text-center text-light-500 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">{{ $t("bd2023.ref2.title") }}</span>
        
                    <hr class="w-full my-3 sm:my-4 md:my-6 lg:my-8 xl:my-10 border-l border-grey-1000">
        
                    <span v-for="line in splitLines($t('bd2023.ref2.text'))" :key="line" class="text-font text-center text-light-500 sm:text-grey-500 text-[6px] sm:text-[8px] md:text-[12px] lg:text-[16px] xl:text-xl">
                        {{ line }}<br/>
                    </span>
                </div>

                <hr class="mx-2 sm:mx-4 lg:mx-6">

                <div class="flex justify-center items-center">
                    <img src="@/assets/images/bd/2023/2/0.jpg" class="min-w-[84px] h-[103px] sm:min-w-[145px] sm:h-[175px] md:min-w-[205px] md:h-[250px] lg:min-w-[265px] lg:h-[325px] xl:min-w-[325px] xl:h-[400px] 2xl:min-w-[385px] 2xl:h-[473px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[2deg]">
                </div>
            </div>
            
            <hr class="my-2 sm:my-4 lg:my-6">
        </div>
    </div>
    <div class="flex bg-dark-600" ref="3">
        <div class="flex flex-col justify-start items-center relative w-full px-[24px] sm:px-[52px] md:px-[54px] lg:px-[56px] xl:px-[58px] bg-dark-500 shadow-bottom z-[94] rounded-b-2xl border-b border-dark-200">
            <hr class="my-2 sm:my-4 lg:my-6">

            <span class="text-font text-center text-light-500 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">{{ $t("bd2023.ref3.title") }}</span>

            <hr class="w-full my-3 sm:my-4 md:my-6 lg:my-8 xl:my-10 border-l border-grey-1000">

            <span v-for="line in splitLines($t('bd2023.ref3.text'))" :key="line" class="text-font text-center text-light-500 sm:text-grey-500 text-[6px] sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {{ line }}<br/>
            </span>

            <hr class="my-2 sm:my-4 lg:my-6">

            <div class="flex justify-between items-center w-full">
                <img src="@/assets/images/bd/2023/3/0.jpg" class="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] xl:w-[135px] xl:h-[135px] 2xl:w-[160px] 2xl:h-[160px] rounded-[10px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[3deg]">
                <img src="@/assets/images/bd/2023/3/1.jpg" class="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] xl:w-[135px] xl:h-[135px] 2xl:w-[160px] 2xl:h-[160px] rounded-[10px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-7deg]">
                <img src="@/assets/images/bd/2023/3/2.jpg" class="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] xl:w-[135px] xl:h-[135px] 2xl:w-[160px] 2xl:h-[160px] rounded-[10px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[4deg]">
                <img src="@/assets/images/bd/2023/3/3.jpg" class="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] xl:w-[135px] xl:h-[135px] 2xl:w-[160px] 2xl:h-[160px] rounded-[10px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-3deg]">
                <img src="@/assets/images/bd/2023/3/4.jpg" class="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] xl:w-[135px] xl:h-[135px] 2xl:w-[160px] 2xl:h-[160px] rounded-[10px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[7deg]">
                <img src="@/assets/images/bd/2023/3/5.jpg" class="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] xl:w-[135px] xl:h-[135px] 2xl:w-[160px] 2xl:h-[160px] rounded-[10px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-4deg]">
                <img src="@/assets/images/bd/2023/3/6.jpg" class="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] xl:w-[135px] xl:h-[135px] 2xl:w-[160px] 2xl:h-[160px] rounded-[10px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[3deg]">
                <img src="@/assets/images/bd/2023/3/7.jpg" class="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] xl:w-[135px] xl:h-[135px] 2xl:w-[160px] 2xl:h-[160px] rounded-[10px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-7deg]">
            </div>
            
            <hr class="my-2 sm:my-4 lg:my-6">
        </div>
    </div>
    <div class="flex bg-dark-500" ref="4">
        <div class="flex flex-col justify-start items-center relative w-full px-[24px] sm:px-[52px] md:px-[54px] lg:px-[56px] xl:px-[58px] bg-dark-600 shadow-bottom z-[93] rounded-b-2xl border-b border-dark-200">
            <hr class="my-2 sm:my-4 lg:my-6">

            <div class="flex justify-center items-center sm:px-4 md:px-6 lg:px-8 xl:px-10">
                <div class="flex justify-center items-end relative">
                    <img src="@/assets/images/bd/2023/4/0.jpg" class="min-w-[84px] h-[103px] sm:min-w-[145px] sm:h-[175px] md:min-w-[205px] md:h-[250px] lg:min-w-[265px] lg:h-[325px] xl:min-w-[325px] xl:h-[400px] 2xl:min-w-[385px] 2xl:h-[473px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[0deg]">
                    <img src="@/assets/images/bd/2023/4/1.jpg" class="absolute left-[140%] top-[45%] w-1/2 h-1/2 rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[7deg]">
                    <img src="@/assets/images/bd/2023/4/2.jpg" class="absolute right-[140%] top-[5%] w-1/2 h-1/2 rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200 rotate-[-7deg]">
                    
                    <span class="absolute left-[115%] top-[10%] w-full text-font text-center text-light-500 text-[10px] sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">{{ $t("bd2023.ref4.title") }}</span>
                    <span class="absolute left-[-115%] top-[80%] w-full text-font text-center text-light-500 text-[10px] sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">{{ $t("bd2023.ref4.text") }}</span>
                </div>
            </div>
            
            <hr class="my-2 sm:my-4 lg:my-6">
        </div>
    </div>
    <div class="flex bg-dark-500" ref="5">
        <div class="flex flex-col justify-start items-center relative w-full px-[24px] sm:px-[52px] md:px-[54px] lg:px-[56px] xl:px-[58px] bg-dark-600 shadow-bottom z-[92] rounded-b-2xl border-b border-dark-200">
            <hr class="my-2 sm:my-4 lg:my-6">

            <span class="text-font text-center text-light-500 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">{{ $t("bd2023.ref5.title") }}</span>

            <hr class="w-full my-3 sm:my-4 md:my-6 lg:my-8 xl:my-10 border-l border-grey-1000">

            <span v-for="line in splitLines($t('bd2023.ref5.text'))" :key="line" class="text-font text-center text-light-500 sm:text-grey-500 text-[6px] sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {{ line }}<br/>
            </span>

            <hr class="my-2 sm:my-4 lg:my-6">

            <div class="flex justify-between items-center w-full sm:px-4 md:px-6 lg:px-8 xl:px-10">
                <div class="flex flex-col justify-between items-center w-[50px] sm:w-[90px] md:w-[110px] lg:w-[160px] xl:w-[205px] 2xl:w-[250px] rotate-[1deg]">
                    <img src="@/assets/images/bd/2023/5/0.jpg" class="w-[50px] h-[90px] sm:w-[90px] sm:h-[167px] md:w-[110px] md:h-[244px] lg:w-[160px] lg:h-[321px] xl:w-[205px] xl:h-[398px] 2xl:w-[250px] 2xl:h-[475px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200">
                    <hr class="my-1 sm:my-2 lg:my-3">
                    <span class="text-font text-center text-light-500 text-[6px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{{ $t("bd2023.ref5.style.0") }}</span>
                </div>
                <div class="flex flex-col justify-between items-center w-[50px] sm:w-[90px] md:w-[110px] lg:w-[160px] xl:w-[205px] 2xl:w-[250px] rotate-[-1deg]">
                    <span class="text-font text-center text-light-500 text-[6px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{{ $t("bd2023.ref5.style.1") }}</span>
                    <hr class="my-1 sm:my-2 lg:my-3">
                    <img src="@/assets/images/bd/2023/5/1.jpg" class="w-[50px] h-[90px] sm:w-[90px] sm:h-[167px] md:w-[110px] md:h-[244px] lg:w-[160px] lg:h-[321px] xl:w-[205px] xl:h-[398px] 2xl:w-[250px] 2xl:h-[475px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200">
                </div>
                <div class="flex flex-col justify-between items-center w-[50px] sm:w-[90px] md:w-[110px] lg:w-[160px] xl:w-[205px] 2xl:w-[250px] rotate-[1deg]">
                    <img src="@/assets/images/bd/2023/5/2.jpg" class="w-[50px] h-[90px] sm:w-[90px] sm:h-[167px] md:w-[110px] md:h-[244px] lg:w-[160px] lg:h-[321px] xl:w-[205px] xl:h-[398px] 2xl:w-[250px] 2xl:h-[475px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200">
                    <hr class="my-1 sm:my-2 lg:my-3">
                    <span class="text-font text-center text-light-500 text-[6px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{{ $t("bd2023.ref5.style.2") }}</span>
                </div>
                <div class="flex flex-col justify-between items-center w-[50px] sm:w-[90px] md:w-[110px] lg:w-[160px] xl:w-[205px] 2xl:w-[250px] rotate-[1deg]">
                    <span class="text-font text-center text-light-500 text-[6px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{{ $t("bd2023.ref5.style.3") }}</span>
                    <hr class="my-1 sm:my-2 lg:my-3">
                    <img src="@/assets/images/bd/2023/5/3.jpg" class="w-[50px] h-[90px] sm:w-[90px] sm:h-[167px] md:w-[110px] md:h-[244px] lg:w-[160px] lg:h-[321px] xl:w-[205px] xl:h-[398px] 2xl:w-[250px] 2xl:h-[475px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200">
                </div>
                <div class="flex flex-col justify-between items-center w-[50px] sm:w-[90px] md:w-[110px] lg:w-[160px] xl:w-[205px] 2xl:w-[250px] rotate-[-1deg]">
                    <img src="@/assets/images/bd/2023/5/4.jpg" class="w-[50px] h-[90px] sm:w-[90px] sm:h-[167px] md:w-[110px] md:h-[244px] lg:w-[160px] lg:h-[321px] xl:w-[205px] xl:h-[398px] 2xl:w-[250px] 2xl:h-[475px] rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200">
                    <hr class="my-1 sm:my-2 lg:my-3">
                    <span class="text-font text-center text-light-500 text-[6px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{{ $t("bd2023.ref5.style.4") }}</span>
                </div>
            </div>
            
            <hr class="my-2 sm:my-4 lg:my-6">
        </div>
    </div>
    <div class="flex bg-dark-500" ref="6">
        <div class="flex flex-col justify-start items-center relative w-full px-[24px] sm:px-[52px] md:px-[54px] lg:px-[56px] xl:px-[58px] bg-dark-600 shadow-bottom z-[92] rounded-b-2xl border-b border-dark-200">
            <hr class="my-2 sm:my-4 lg:my-6">

            <span class="text-font text-center text-light-500 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">{{ $t("bd2023.ref6.title") }}</span>

            <hr class="w-full my-3 sm:my-4 md:my-6 lg:my-8 xl:my-10 border-l border-grey-1000">

            <span v-for="line in splitLines($t('bd2023.ref6.text'))" :key="line" class="text-font text-center text-light-500 text-[6px] sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {{ line }}<br/>
            </span>
            
            <hr class="my-2 sm:my-4 lg:my-6">

            <span class="text-font text-center text-light-500 text-[6px] sm:text-sm md:text-base lg:text-lg xl:text-xl">{{ $t("bd2023.ref6.love") }}</span>

            <hr class="my-2 sm:my-4 lg:my-6">

            <span class="text-font text-center text-grey-500 text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-base">{{ $t("bd2023.ref6.btw") }}</span>

            <hr class="my-2 sm:my-4 lg:my-6">

            <img src="@/assets/icons/heart.png" class="w-[125px] h-[125px] sm:w-[185px] sm:h-[185px] md:w-[240px] md:h-[240px] lg:w-[295px] lg:h-[295px] xl:w-[350px] xl:h-[350px] opacity-25 object-contain drop-shadow-around-xl">
            
            <hr class="my-2 sm:my-4 lg:my-6">
        </div>
    </div>
</template>

<script>
import Helpers from "@/plugins/uni@helpers/helpers"

import sk from "@/plugins/app/_locales/sk.json"

export default {
    emits: ['setIsAuth'],

    mounted() {
        this.$emit('setIsAuth', true);
    },

    computed: {
        t() {
            return sk;
        }
    },

    data() {
        return {
            year: '',
        }
    },

    created() {
        this.year = this.$route.path.slice(-4);
    },

    methods: {
        scroll(target) {
            Helpers.scroll(this.$refs, target)
		},
        splitLines(text) {
            return Helpers.splitLines(text);
        }
    }
}
</script>