const headerNav = document.querySelector('header');


let leftNavSettings = document.querySelector('#leftNavSettings');
let leftNavText = document.querySelector('#leftNavText');


leftNavText.addEventListener('click', () => {
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
                                '<div class="notEdit">'+
                                    '<div>'+
                                        '<img src="public/img/formula.svg" onclick="appendFormulaCarret();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    //'<div>'+
                                    //    '<img src="public/img/clearText.svg" onclick="range.commonAncestorContainer.innerHTML = range.toString();" class="notEdit elementTopNavImg">'+
                                    //'</div>'+
                                    '<div>'+
                                        '<img src="public/img/sup.svg" onclick="sup();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/sub.svg" onclick="sub();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/textColor.svg" onclick="showPalitra(this);" class="notEdit elementTopNavImg">'+
                                        '<div class="colorPickerPalitra" style="display: none;">'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeColorText(\'black\');" style="background: black"></div>'+
                                                '<div onclick="changeColorText(\'white\');" style="background: white"></div>'+
                                                '<div onclick="changeColorText(\'red\');" style="background: red"></div>'+
                                                '<div onclick="changeColorText(\'IndianRed\');" style="background: IndianRed"></div>'+
                                                '<div onclick="changeColorText(\'DarkRed\');" style="background: DarkRed"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeColorText(\'green\');" style="background: green"></div>'+
                                                '<div onclick="changeColorText(\'GreenYellow\');" style="background: GreenYellow"></div>'+
                                                '<div onclick="changeColorText(\'LimeGreen\');" style="background: LimeGreen"></div>'+
                                                '<div onclick="changeColorText(\'SpringGreen\');" style="background: SpringGreen"></div>'+
                                                '<div onclick="changeColorText(\'LightSeaGreen\');" style="background: LightSeaGreen"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeColorText(\'MediumSeaGreen\');" style="background: MediumSeaGreen"></div>'+
                                                '<div onclick="changeColorText(\'DarkGreen\');" style="background: DarkGreen"></div>'+
                                                '<div onclick="changeColorText(\'Olive\');" style="background: Olive"></div>'+
                                                '<div onclick="changeColorText(\'LightSeaGreen\');" style="background: LightSeaGreen"></div>'+
                                                '<div onclick="changeColorText(\'Teal\');" style="background: Teal"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeColorText(\'Pink\');" style="background: Pink"></div>'+
                                                '<div onclick="changeColorText(\'HotPink\');" style="background: HotPink"></div>'+
                                                '<div onclick="changeColorText(\'MediumVioletRed\');" style="background: MediumVioletRed"></div>'+
                                                '<div onclick="changeColorText(\'LightSalmon\');" style="background: LightSalmon"></div>'+
                                                '<div onclick="changeColorText(\'OrangeRed\');" style="background: OrangeRed"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeColorText(\'Gold\');" style="background: Gold"></div>'+
                                                '<div onclick="changeColorText(\'Yellow\');" style="background: Yellow"></div>'+
                                                '<div onclick="changeColorText(\'Aqua\');" style="background: Aqua"></div>'+
                                                '<div onclick="changeColorText(\'DarkTurquoise\');" style="background: DarkTurquoise"></div>'+
                                                '<div onclick="changeColorText(\'SteelBlue\');" style="background: SteelBlue"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeColorText(\'Blue\');" style="background: Blue"></div>'+
                                                '<div onclick="changeColorText(\'DarkBlue\');" style="background: DarkBlue"></div>'+
                                                '<div onclick="changeColorText(\'Violet\');" style="background: Violet"></div>'+
                                                '<div onclick="changeColorText(\'Magenta\');" style="background: Magenta"></div>'+
                                                '<div onclick="changeColorText(\'Indigo\');" style="background: Indigo"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeColorText(\'Snow\');" style="background: Snow"></div>'+
                                                '<div onclick="changeColorText(\'AntiqueWhite\');" style="background: AntiqueWhite"></div>'+
                                                '<div onclick="changeColorText(\'Gray\');" style="background: Gray"></div>'+
                                                '<div onclick="changeColorText(\'SlateGray\');" style="background: SlateGray"></div>'+
                                                '<div onclick="changeColorText(\'Brown\');" style="background: Brown"></div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+

                                    '<div>'+
                                        '<img src="public/img/palitra.svg" onclick="showPalitra(this);" class="notEdit elementTopNavImg">'+
                                        '<div class="colorPickerPalitra" style="display: none;">'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgColorText(\'black\');" style="background: black"></div>'+
                                                '<div onclick="changeBgColorText(\'white\');" style="background: white"></div>'+
                                                '<div onclick="changeBgColorText(\'red\');" style="background: red"></div>'+
                                                '<div onclick="changeBgColorText(\'IndianRed\');" style="background: IndianRed"></div>'+
                                                '<div onclick="changeBgColorText(\'DarkRed\');" style="background: DarkRed"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgColorText(\'green\');" style="background: green"></div>'+
                                                '<div onclick="changeBgColorText(\'GreenYellow\');" style="background: GreenYellow"></div>'+
                                                '<div onclick="changeBgColorText(\'LimeGreen\');" style="background: LimeGreen"></div>'+
                                                '<div onclick="changeBgColorText(\'SpringGreen\');" style="background: SpringGreen"></div>'+
                                                '<div onclick="changeBgColorText(\'LightSeaGreen\');" style="background: LightSeaGreen"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgColorText(\'MediumSeaGreen\');" style="background: MediumSeaGreen"></div>'+
                                                '<div onclick="changeBgColorText(\'DarkGreen\');" style="background: DarkGreen"></div>'+
                                                '<div onclick="changeBgColorText(\'Olive\');" style="background: Olive"></div>'+
                                                '<div onclick="changeBgColorText(\'LightSeaGreen\');" style="background: LightSeaGreen"></div>'+
                                                '<div onclick="changeBgColorText(\'Teal\');" style="background: Teal"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgColorText(\'Pink\');" style="background: Pink"></div>'+
                                                '<div onclick="changeBgColorText(\'HotPink\');" style="background: HotPink"></div>'+
                                                '<div onclick="changeBgColorText(\'MediumVioletRed\');" style="background: MediumVioletRed"></div>'+
                                                '<div onclick="changeBgColorText(\'LightSalmon\');" style="background: LightSalmon"></div>'+
                                                '<div onclick="changeBgColorText(\'OrangeRed\');" style="background: OrangeRed"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgColorText(\'Gold\');" style="background: Gold"></div>'+
                                                '<div onclick="changeBgColorText(\'Yellow\');" style="background: Yellow"></div>'+
                                                '<div onclick="changeBgColorText(\'Aqua\');" style="background: Aqua"></div>'+
                                                '<div onclick="changeBgColorText(\'DarkTurquoise\');" style="background: DarkTurquoise"></div>'+
                                                '<div onclick="changeBgColorText(\'SteelBlue\');" style="background: SteelBlue"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgColorText(\'Blue\');" style="background: Blue"></div>'+
                                                '<div onclick="changeBgColorText(\'DarkBlue\');" style="background: DarkBlue"></div>'+
                                                '<div onclick="changeBgColorText(\'Violet\');" style="background: Violet"></div>'+
                                                '<div onclick="changeBgColorText(\'Magenta\');" style="background: Magenta"></div>'+
                                                '<div onclick="changeBgColorText(\'Indigo\');" style="background: Indigo"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgColorText(\'Snow\');" style="background: Snow"></div>'+
                                                '<div onclick="changeBgColorText(\'AntiqueWhite\');" style="background: AntiqueWhite"></div>'+
                                                '<div onclick="changeBgColorText(\'Gray\');" style="background: Gray"></div>'+
                                                '<div onclick="changeBgColorText(\'SlateGray\');" style="background: SlateGray"></div>'+
                                                '<div onclick="changeBgColorText(\'Brown\');" style="background: Brown"></div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>	'+
                                    
                                    '<div>'+
                                        '<img src="public/img/fontSize.svg" onclick="showList(this);" class="notEdit elementTopNavImg">'+
                                        '<div class="showList" style="display: none">'+
                                            '<div onclick="changeFontSize(\'8pt\');">8pt</div>'+
                                            '<div onclick="changeFontSize(\'10pt\');">10pt</div>'+
                                            '<div onclick="changeFontSize(\'11pt\');">11pt</div>'+
                                            '<div onclick="changeFontSize(\'12pt\');">12pt</div>'+
                                            '<div onclick="changeFontSize(\'13pt\');">13pt</div>'+
                                            '<div onclick="changeFontSize(\'14pt\');">14pt</div>'+
                                            '<div onclick="changeFontSize(\'16pt\');">16pt</div>'+
                                            '<div onclick="changeFontSize(\'20pt\');">20pt</div>'+
                                            '<div onclick="changeFontSize(\'30pt\');">30pt</div>'+
                                            '<div onclick="changeFontSize(\'40pt\');">40pt</div>'+
                                            '<div onclick="changeFontSize(\'60pt\');">60pt</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/pen.svg" onclick="showList(this);" class="notEdit elementTopNavImg">'+
                                        '<div class="showList" style="display: none">'+
                                            '<div onclick="changeFontLine("\'lineSolid\'");">Подлежащее</div>'+
                                            '<div onclick="changeFontLine(\'lineDouble\');">Сказуемое</div>'+
                                            '<div onclick="changeFontLine(\'obst\');">Обстоятельство</div>'+
                                            '<div onclick="changeFontLine(\'lineDashed\');">Дополнение</div>'+
                                            '<div onclick="changeFontLine(\'lineWavy\');">Определение</div>'+
                                            
                                            '<div onclick="changeFontMorf(\'fontConsole\');">Приставка</div>'+
                                            '<div onclick="changeFontMorf(\'fontRoot\');">Корень</div>'+
                                            '<div onclick="changeFontMorf(\'fontFoundation\');">Основа</div>'+
                                            '<div onclick="changeFontMorf(\'fontSuffix\');">Суффикс</div>'+
                                            '<div onclick="changeFontMorf(\'fontEnding\');">Окончание</div>'+
                                            '<div onclick="changeFontMorf(\'fontDar\');">Ударение</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/normal.svg" onclick="normal();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/bold.svg" onclick="bold();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/italic.svg" onclick="italic();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/centerT.svg" onclick="textAlignCenter();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/rightT.svg" onclick="textAlignRight();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/leftT.svg" onclick="textAlignLeft();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/title.svg" onclick="textTitle();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/link.svg" onclick="appendLinkText();" title="Создать ссылку" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '<div>'+
                                        '<img src="public/img/anchor.svg" onclick="appendAnchor();" class="notEdit elementTopNavImg">'+
                                    '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';	
});


