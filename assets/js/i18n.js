class WebsiteInternationalization {
    static avaliableLanguages = [
        {
            lang: 'en',
            name: 'English'
        },
        {
            lang: 'zh',
            name: '简体中文'
        },
        {
            lang: 'ru',
            name: 'Русский язык'
        },
    ]

    static languagesString = {
        "en": {
            "languageSpan": "Language",
            "productDescription": "Plugin loader for Minecraft BDS",
            "downloadButton": "Download",
            "swipeDown": "Swipe down",
            "whatsLl": "What's LiteLoaderBDS?",
            "whatsLlDescription": "LiteLoader is an unofficial plugin loader that provides basic API support for Bedrock Dedicated Server, with a massive API, lots of packed utility interfaces, a rich event system and powerful basic interface support.",
            "benefitsLl": "Benefits LiteLoaderBDS",
            "firstBenefit": "Full access to all classes and features",
            "secondBenefit": "Automatically generated C++ headers",
            "thirdBenefit": "Free and easy coding experience",
            "fourBenefit": "A huge API",
            "fiveBenefit": "Stability and security of your server",
            "sixBenefit": "Open-source",
            "cpfllHeader": "Creating plugins for LiteLoader?",
            "cpfllDescription": "You can view the sample for creating a plugin for LiteLoader or view the documentation for the LiteLoader API",
            "cpfllSampleDownload": "Download a sample",
            "cpfllDocumentation": "Documentation",
            "pageNotSupported": "LiteLoaderBDS not supported by Mojang Studio, Microsoft and Minecraft."
        },
        "ru": {
            "languageSpan": "Язык",
            "productDescription": "Загрузщик плагинов для Minecraft BDS",
            "downloadButton": "Скачать",
            "swipeDown": "Пролисните вниз",
            "whatsLl": "Что такое LiteLoaderBDS?",
            "whatsLlDescription": "LiteLoader - это неофициальный загрузчик плагинов, обеспечивающий поддержку базового API для Bedrock Dedicated Server, с массивным интерфейсом API, большим количеством упакованных интерфейсов утилит, богатой системой событий и мощной поддержкой базового интерфейса.",
            "benefitsLl": "Преимущества LiteLoaderBDS",
            "firstBenefit": "Полный доступ ко всем классам и функциям",
            "secondBenefit": "Автоматически генерируемые заголовки C++",
            "thirdBenefit": "Бесплатный и простой опыт в написании плагинов",
            "fourBenefit": "Обширный API",
            "fiveBenefit": "Стабильность и защищенность вашего сервера",
            "sixBenefit": "Является полностью открытым",
            "cpfllHeader": "Создаете плагины для LiteLoader?",
            "cpfllDescription": "Вы можете скачать образец для создания плагина для LiteLoader или просмотреть документацию к LiteLoader API",
            "cpfllSampleDownload": "Скачать образец",
            "cpfllDocumentation": "Документация",
            "pageNotSupported": "LiteLoaderBDS не поддерживатеся Mojang Studio, Microsoft and Minecraft."
        },
        "zh": {
            "languageSpan": "语言",
            "productDescription": "Minecraft BDS 的插件加载器",
            "downloadButton": "立即下载",
            "swipeDown": "了解更多",
            "whatsLl": "什么是LiteLoaderBDS？",
            "whatsLlDescription": "LiteLoader是为基岩版服务端Bedrock Dedicated Server提供底层API支持的非官方插件加载器，拥有海量的API接口、大量封装好的实用接口、丰富的事件系统和强大的底层接口支持。",
            "benefitsLl": "LiteLoaderBDS的优点",
            "firstBenefit": "完全开放的类与函数",
            "secondBenefit": "全自动生成的C++头文件",
            "thirdBenefit": "自由和简易的编写体验",
            "fourBenefit": "提供大量底层的API",
            "fiveBenefit": "修补部分BDS存在的漏洞，保证您服务器的稳定安全",
            "sixBenefit": "完全开源，永久免费",
            "cpfllHeader": "为LiteLoader创建插件",
            "cpfllDescription": "你可以查看创建LiteLoader插件的模板，或查看LiteLoader API文档",
            "cpfllSampleDownload": "下载一个开发模板",
            "cpfllDocumentation": "文档",
            "pageNotSupported": "本页面与MOJANG STUDIOS、MICROSOFT与MINECRAFT论坛无关"
        }
    }

    static getAvaliableLanguages() {
        return this.avaliableLanguages
    }

    static loadLanguage() {
        if (localStorage.getItem('selectedLang') == undefined) {
            localStorage.setItem('selectedLang', "en")
        }

        const selectedLang = this.languagesString[localStorage.getItem('selectedLang')];

        try {
            Object.keys(selectedLang).forEach((key) => {
                $(`#${key}`).text(selectedLang[key])
            })
        } catch {
            localStorage.setItem('selectedLang', 'en')
            window.location.reload()
        }
    }
}