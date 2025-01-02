import Accordion from "./Accordion";
import createConfig from "@/app/actions"

export default function ConfigForm()
{   
    return (
        <section className="mt-12 ml-10 max-h-[540px] overflow-y-scroll max-w-[700px]">
            <form 
                action={ async (formData : FormData) => {
                    "use server"
                    createConfig(formData)
                }}
                className="flex flex-col text-black max-w-[90%]">
                <section>
                    <label htmlFor="configName" className="text-3xl">Config Name</label>
                    <br />
                    <input 
                        className="max-w-40 border-b-2 outline-none focus:border-black ease-out duration-300 mb-2"
                        name="configName"
                        id="configName"
                        type="text"
                        required/>
                </section>
                
                <h3 className="text-3xl mt-4 mb-2">Device</h3>
                <hr/>
                <Accordion categoryName="Switches">
                    <section className="grid grid-cols-3 gap-y-2 px-2">
                        <section>
                            <label htmlFor="PPpin">Play/Pause Switch</label> <br />
                            {pinOptions({selectName : "PPpin"})}
                        </section>
                        <section>
                            <label htmlFor="PREVpin">Previous Switch</label>
                            {pinOptions({selectName : "PREVpin"})}
                        </section>
                        <section>
                            <label htmlFor="NEXTpin">Next Switch</label>
                            {pinOptions({selectName : "NEXTpin"})}
                        </section>
                        <section>
                            <label htmlFor="LIKEpin">Like Switch</label>
                            {pinOptions({selectName : "LIKEpin"})}
                        </section>
                        <section>
                            <label htmlFor="SHUFFLEpin">Shuffle Switch</label>
                            {pinOptions({selectName : "SHUFFLEpin"})}
                        </section>
                        <section>
                            <label htmlFor="TABpin">Tab Switch</label>
                            {pinOptions({selectName : "TABpin"})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Rotary Encoder">
                    <section className="grid grid-cols-2 px-2">
                        <section>
                            <label htmlFor="REdir">Positive Direction</label>
                            <br />
                            <select name="REdir" id="REdir" className="outline-none">
                                <option value="clockwise" selected>Clockwise (default)</option>
                                <option value="counterclockwise">Counter Clockwise</option>
                            </select>
                        </section>
                        <section>
                            <label htmlFor="REdir">Send Spotify Volume Delay</label>
                            <br />
                            <select name="SendEncoderDelay" id="SendEncoderDelay" className="outline-none">
                                <option value="1500">1,5s</option>
                                <option value="1000">1,0s</option>
                                <option value="500">0,5s</option>
                                <option value="250">0,25s</option>
                                <option value="0" selected>0s (default)</option>
                            </select>
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Refresh Time">
                    <section className="grid grid-cols-4 px-2 gap-x-1">
                        <section>
                            <label htmlFor="RefreshPlaybackState">Refresh Data from Spotify</label><br />
                            <select name="RefreshPlaybackState" id="RefreshPlaybackState" className="outline-none">
                                <option value="5000">5,0s</option>
                                <option value="3000">3,0s</option>
                                <option value="2500">2,5s</option>
                                <option value="2000">2,0s</option>
                                <option value="1500" selected>1,5s (default)</option>
                                <option value="1000">1,0s</option>
                                <option value="500">0,5s (warn)</option>
                            </select>
                        </section>
                        <section>
                            <label htmlFor="RefreshPlaybackStateInactive">Inactive Refresh Rate</label><br />
                                <select name="RefreshPlaybackStateInactive" id="RefreshPlaybackStateInactive" className="outline-none">
                                    <option value="20000">20,0s</option>
                                    <option value="15000">15,0s</option>
                                    <option value="10000">10,0s</option>
                                    <option value="7500">7,5s</option>
                                    <option value="5000" selected>5,0s (default)</option>
                                    <option value="3000">3,0s</option>
                                    <option value="2500">2,5s</option>
                                    <option value="2000">2,0s</option>
                                    <option value="1500">1,5s</option>
                                    <option value="1000">1,0s</option>
                                </select>
                        </section>
                        <section>
                            <label htmlFor="RefreshPlaybackStateUpdateLock">Action Update Lock</label><br />
                                <select name="RefreshPlaybackStateUpdateLock" id="RefreshPlaybackStateUpdateLock" className="outline-none">
                                    <option value="3000">3,0s</option>
                                    <option value="2000">2,0s</option>
                                    <option value="1800" selected>1,8s (default)</option>
                                    <option value="1500">1,5s</option>
                                    <option value="1000">1,0 (warn)</option>
                                    <option value="500">0,5 (2x warn)</option>
                                </select>
                        </section>
                        <section>
                            <label htmlFor="RefreshDisplay">Display Refresh Rate</label><br />
                                <select name="RefreshDisplay" id="RefreshDisplay" className="outline-none">
                                    <option value="11">90 Hz</option>
                                    <option value="16" selected>60 Hz (default)</option>
                                    <option value="33">30 Hz</option>
                                    <option value="66">15 Hz</option>
                                    <option value="100">10 Hz</option>
                                    <option value="1000">1 Hz (goofy)</option>
                                </select>
                        </section>
                    </section>
                </Accordion>
                
                <Accordion categoryName="Skip and Rewind Behavior in Episode/Podcast">
                    <section className="grid grid-cols-2 px-2">
                        <section>
                            <label htmlFor="SendSkipEpisode">Time Skip</label><br />
                            <select name="SendSkipEpisode" id="SendSkipEpisode" className="outline-none">
                                <option value="30000">30s</option>
                                <option value="25000">25s</option>
                                <option value="20000">20s</option>
                                <option value="15000" selected>15s (default)</option>
                                <option value="12500">12,5s</option>
                                <option value="10000">10,0s</option>
                                <option value="5000">5,0s</option>
                                <option value="2500">2,5s</option>
                            </select>
                        </section>
                        <section>
                            <label htmlFor="SendRewindEpisode">Time Rewind</label><br />
                            <select name="SendRewindEpisode" id="SendRewindEpisode" className="outline-none">
                                <option value="30000">30s</option>
                                <option value="25000">25s</option>
                                <option value="20000">20s</option>
                                <option value="15000" selected>15s (default)</option>
                                <option value="12500">12,5s</option>
                                <option value="10000">10,0s</option>
                                <option value="5000">5,0s</option>
                                <option value="2500">2,5s</option>
                            </select>
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Tabs">
                    <section className="grid grid-cols-3 px-2">
                        <section>
                            <label htmlFor="TabSelectedDefault">Default Selected Tab</label><br />
                            <select name="TabSelectedDefault" id="TabSelectedDefault" className="outline-none">
                                <option value="1" selected>Player (default)</option>
                                <option value="2">Library</option>
                                <option value="3">Wallpaper</option>
                            </select>
                        </section>
                        <section>
                            <label htmlFor="TabLetterPlayer">Player Letter</label><br />
                            <input 
                                className="max-w-6 border-b-2 outline-none focus:border-black ease-out duration-300"
                                type="text"
                                name="TabLetterPlayer" 
                                id="TabLetterPlayer"
                                maxLength={1}
                                minLength={1}
                                placeholder="P"
                                defaultValue={"P"}/>
                        </section>
                        <section>
                            <label htmlFor="TabLetterLibrary">Library Letter</label><br />
                            <input 
                                className="max-w-6 border-b-2 outline-none focus:border-black ease-out duration-300"
                                type="text"
                                name="TabLetterLibrary" 
                                id="TabLetterLibrary"
                                maxLength={1}
                                minLength={1}
                                placeholder="L"
                                defaultValue={"L"}/>
                        </section>
                    </section>                    
                </Accordion>

                <Accordion categoryName="Volume">
                    <section className="grid grid-cols-4 px-2">
                        <section>
                            <label htmlFor="VolumeMin">Min Volume</label><br />
                            {numberInput({name : "VolumeMin", placeholder : "0", min : 0, max : 100, defaultValue : 0})}
                        </section>
                        <section>
                            <label htmlFor="VolumeMax">Max Volume</label><br />
                            {numberInput({name : "VolumeMax", placeholder : "100", min : 0, max : 100, defaultValue : 100})}
                        </section>
                    </section>
                </Accordion>

                <h3 className="text-3xl mt-4 mb-2">Display</h3>
                <hr />
                <Accordion categoryName="General">
                    <section className="px-2">
                        <label htmlFor="displayGeneralBgColor">Main Background Color</label>
                        <br/>
                        {numberInput({name : "displayGeneralBgColor", placeholder : "0", min : 0, max : 65535, defaultValue : 0})}
                    </section>
                </Accordion>
                
                <Accordion categoryName="Cover Art Origin">
                    <section className="grid grid-cols-4 px-2">
                        <section>
                            <label htmlFor="displayCoverArtX">Position X</label>
                            <br/>
                            {numberInput({name : "displayCoverArtX", placeholder : "0", min : 0, max : 320, defaultValue : 0})}
                        </section>
                        <section>
                            <label htmlFor="displayCoverArtY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayCoverArtY", placeholder : "45", min : 0, max : 480, defaultValue : 45})}
                        </section>
                    </section>
                </Accordion>
                
                <Accordion categoryName="Spotify Logo Origin">
                    <section className="grid grid-cols-4 px-2">
                        <section>
                            <label htmlFor="displayLogoX">Position X</label>
                            <br/>
                            {numberInput({name : "displayLogoX", placeholder : "10", min : 0, max : 320, defaultValue : 10})}
                        </section>
                        <section>
                            <label htmlFor="displayLogoY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayLogoY", placeholder : "10", min : 0, max : 480, defaultValue : 10})}
                        </section>
                    </section>
                </Accordion>
                
                <Accordion categoryName="Shuffle Icon Origin">
                    <section className="grid grid-cols-4 px-2">
                        <section>
                            <label htmlFor="displayShuffleX">Position X</label>
                            <br/>
                            {numberInput({name : "displayShuffleX", placeholder : "295", min : 0, max : 320, defaultValue : 295})}
                        </section>
                        <section>
                            <label htmlFor="displayShuffleY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayShuffleY", placeholder : "360", min : 0, max : 480, defaultValue : 360})}
                        </section>
                        <section>
                            <label htmlFor="displayShuffleColor">Color</label>
                            <br/>
                            {numberInput({name : "displayShuffleColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayShuffleColorDisabled">Color Disabled</label>
                            <br/>
                            {numberInput({name : "displayShuffleColorDisabled", placeholder : "29614", min : 0, max : 65535, defaultValue : 29614})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Version Text">    
                    <section className="grid grid-cols-4 px-2">
                        <section>
                            <label htmlFor="displayVersionX">Position X</label>
                            <br/>
                            {numberInput({name : "displayVersionX", placeholder : "0", min : 0, max : 320, defaultValue : 0})}
                        </section>
                        <section>
                            <label htmlFor="displayVersionY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayVersionY", placeholder : "470", min : 0, max : 480, defaultValue : 470})}
                        </section>
                        <section>
                            <label htmlFor="displayVersionColor">Color</label>
                            <br/>
                            {numberInput({name : "displayVersionColor", placeholder : "61309", min : 0, max : 65535, defaultValue : 61309})}
                        </section>
                    </section>
                </Accordion>
            
                <Accordion categoryName="WiFi Issues Text">
                    <section className="grid grid-cols-1 px-2 gap-y-2">
                        <section>
                            <label htmlFor="displayWiFiText">WiFi Disconnected Text</label>
                            <br/>
                            <input 
                                className=" border-b-2 outline-none focus:border-black ease-out duration-300"
                                type="text"
                                name="displayWiFiText" 
                                id="displayWiFiText"
                                maxLength={17}
                                minLength={1}
                                placeholder="WiFi Disconnected"
                                defaultValue={"WiFi Disconnected"}/>
                        </section>
                        <section className="grid grid-cols-4">
                            <section>
                                <label htmlFor="displayWiFiX">Position X</label>
                                <br/>
                                {numberInput({name : "displayWiFiX", placeholder : "160", min : 0, max : 320, defaultValue : 160})}
                            </section>
                            <section>
                                <label htmlFor="displayWiFiY">Position Y</label>
                                <br/>
                                {numberInput({name : "displayWiFiY", placeholder : "20", min : 0, max : 480, defaultValue : 20})}
                            </section>
                            <section>
                                <label htmlFor="displayWiFiTextColor">Color</label>
                                <br/>
                                {numberInput({name : "displayWiFiTextColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                            </section>
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Boot Screen Text and Progress">
                    <section className="grid grid-cols-3 px-2 gap-y-4 gap-x-2">
                        <section>
                            <label htmlFor="displayBootTextX">Text Position X</label>
                            <br/>
                            {numberInput({name : "displayBootTextX", placeholder : "30", min : 0, max : 320, defaultValue : 30})}
                        </section>
                        <section>
                            <label htmlFor="displayBootTextY">Text Position Y</label>
                            <br/>
                            {numberInput({name : "displayBootTextY", placeholder : "230", min : 0, max : 480, defaultValue : 230})}
                        </section>
                        <section>
                            <label htmlFor="displayBootTextColor">Text Color</label>
                            <br/>
                            {numberInput({name : "displayBootTextColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayBootProgressRectW">Rectangle Width</label>
                            <br/>
                            {numberInput({name : "displayBootProgressRectW", placeholder : "250", min : 0, max : 320, defaultValue : 250})}
                        </section>
                        <section>
                            <label htmlFor="displayBootProgressRectH">Rectangle Height</label>
                            <br/>
                            {numberInput({name : "displayBootProgressRectH", placeholder : "10", min : 0, max : 480, defaultValue : 10})}
                        </section>
                        <section>
                            <label htmlFor="displayBootProgressRectRadius">Rectangle Corner Radius</label>
                            <br/>
                            {numberInput({name : "displayBootProgressRectRadius", placeholder : "4", min : 0, max : 50, defaultValue : 4})}
                        </section>
                        <section>
                            <label htmlFor="displayBootProgressRectInnerColor">Rectangle Inner Color</label>
                            <br/>
                            {numberInput({name : "displayBootProgressRectInnerColor", placeholder : "2047", min : 0, max : 65535, defaultValue : 2047})}
                        </section>
                        <section>
                            <label htmlFor="displayBootProgressRectInnerColor">Rectangle Outer Color</label>
                            <br/>
                            {numberInput({name : "displayBootProgressRectInnerColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Play/Pause Icon">
                    <section className="grid grid-cols-2 px-2">
                        <section>
                            <label htmlFor="displayPlayPauseIconX">Position X</label>
                            <br/>
                            {numberInput({name : "displayPlayPauseIconX", placeholder : "6", min : 0, max : 320, defaultValue : 6})}
                        </section>
                        <section>
                            <label htmlFor="displayPlayPauseIconY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayPlayPauseIconY", placeholder : "361", min : 0, max : 480, defaultValue : 361})}
                        </section>
                        <section>
                            <label htmlFor="displayPlayPauseHeight">Play Triangle Height</label>
                            <br/>
                            {numberInput({name : "displayPlayPauseHeight", placeholder : "10", min : 0, max : 480, defaultValue : 10})}
                        </section>
                        <section>
                            <label htmlFor="displayPauseBarThickness">Pause Bar Thickness</label>
                            <br/>
                            {numberInput({name : "displayPauseBarThickness", placeholder : "2", min : 0, max : 200, defaultValue : 2})}
                        </section>
                        <section>
                            <label htmlFor="displayPauseBarGap">Gap Between Pause Bars</label>
                            <br/>
                            {numberInput({name : "displayPauseBarGap", placeholder : "3", min : 0, max : 480, defaultValue : 3})}
                        </section>
                        <section>
                            <label htmlFor="displayPauseHeight">Pause Height</label>
                            <br/>
                            {numberInput({name : "displayPauseHeight", placeholder : "10", min : 0, max : 480, defaultValue : 10})}
                        </section>
                        <section>
                            <label htmlFor="displayPlayIconColor">Play Icon Color</label>
                            <br/>
                            {numberInput({name : "displayPlayIconColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayPauseIconColor">Pause Icon Color</label>
                            <br/>
                            {numberInput({name : "displayPauseIconColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Title/Artist Text">
                
                    <section className="grid grid-cols-3 px-2 gap-y-2">
                        <section>
                            <label htmlFor="displayTitleArtistX">Position X</label>
                            <br/>
                            {numberInput({name : "displayTitleArtistX", placeholder : "0", min : 0, max : 320, defaultValue : 0})}
                        </section>
                        <section>
                            <label htmlFor="displayTitleArtist_TitleY">Title Position Y</label>
                            <br/>
                            {numberInput({name : "displayTitleArtist_TitleY", placeholder : "392", min : 0, max : 480, defaultValue : 392})}
                        </section>
                        <section>
                            <label htmlFor="displayTitleArtist_ArtistY">Artist Position Y</label>
                            <br/>
                            {numberInput({name : "displayTitleArtist_ArtistY", placeholder : "425", min : 0, max : 480, defaultValue : 425})}
                        </section>
                        <section>
                            <label htmlFor="displayTitleArtist_PadLeft">Padding Left</label>
                            <br/>
                            {numberInput({name : "displayTitleArtist_PadLeft", placeholder : "6", min : 0, max : 320, defaultValue : 6})}
                        </section>
                        <section>
                            <label htmlFor="displayTitleArtist_TitleColor">Title Text Color</label>
                            <br/>
                            {numberInput({name : "displayTitleArtist_TitleColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayTitleArtist_ArtistColor">Artist Text Color</label>
                            <br/>
                            {numberInput({name : "displayTitleArtist_ArtistColor", placeholder : "52825", min : 0, max : 65535, defaultValue : 52825})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Track Duration Text">
                    <section className="grid grid-cols-4 px-2">
                        <section>
                            <label htmlFor="displayTrackDurationX">Position X</label>
                            <br/>
                            {numberInput({name : "displayTrackDurationX", placeholder : "284", min : 0, max : 320, defaultValue : 284})}
                        </section>
                        <section>
                            <label htmlFor="displayTrackDurationY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayTrackDurationY", placeholder : "368", min : 0, max : 480, defaultValue : 368})}
                        </section>
                        <section>
                            <label htmlFor="displayTrackDurationColor">Color</label>
                            <br/>
                            {numberInput({name : "displayTrackDurationColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Track Progress Text">
                    <section className="grid grid-cols-4 px-2">
                        <section>
                            <label htmlFor="displayTrackProgressX">Position X</label>
                            <br/>
                            {numberInput({name : "displayTrackProgressX", placeholder : "22", min : 0, max : 320, defaultValue : 22})}
                        </section>
                        <section>
                            <label htmlFor="displayTrackProgressY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayTrackProgressY", placeholder : "368", min : 0, max : 480, defaultValue : 368})}
                        </section>
                        <section>
                            <label htmlFor="displayTrackProgressColor">Color</label>
                            <br/>
                            {numberInput({name : "displayTrackProgressColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Track Progress Bar">
                    <section className="grid grid-cols-3 px-2 gap-y-2">
                        <section>
                            <label htmlFor="displayProgressBarX">Position X</label>
                            <br/>
                            {numberInput({name : "displayProgressBarX", placeholder : "22", min : 0, max : 320, defaultValue : 22})}
                        </section>
                        <section>
                            <label htmlFor="displayProgressBarY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayProgressBarY", placeholder : "361", min : 0, max : 480, defaultValue : 361})}
                        </section>
                        <section>
                            <label htmlFor="displayProgressBarWidth">Width</label>
                            <br/>
                            {numberInput({name : "displayProgressBarWidth", placeholder : "261", min : 0, max : 320, defaultValue : 261})}
                        </section>
                        <section>
                            <label htmlFor="displayProgressBarHeight">Height</label>
                            <br/>
                            {numberInput({name : "displayProgressBarHeight", placeholder : "2", min : 0, max : 480, defaultValue : 2})}
                        </section>
                        <section>
                            <label htmlFor="displayProgressBarColorFg">Color Foreground</label>
                            <br/>
                            {numberInput({name : "displayProgressBarColorFg", placeholder : "53670", min : 0, max : 65535, defaultValue : 53670})}
                        </section>
                        <section>
                            <label htmlFor="displayProgressBarColorBg">Color Background</label>
                            <br/>
                            {numberInput({name : "displayProgressBarColorBg", placeholder : "27501", min : 0, max : 65535, defaultValue : 27501})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Cover Art Loading">
                    <section className="grid grid-cols-3 px-2">
                        <section>
                            <label htmlFor="displayCoverArtLoading_Text">Loading Text</label>
                            <br/>
                            <input 
                                className="max-w-24 border-b-2 outline-none focus:border-black ease-out duration-300"
                                type="text"
                                name="displayCoverArtLoading_Text" 
                                id="displayCoverArtLoading_Text"
                                maxLength={10}
                                minLength={1}
                                placeholder="Loading..."
                                defaultValue={"Loading..."}/>
                        </section>
                        <section>
                            <label htmlFor="displayCoverArtLoading_TextColor">Text Color</label>
                            <br/>
                            {numberInput({name : "displayCoverArtLoading_TextColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Volume General">
                    <section className="grid grid-cols-3 px-2">
                        <section>
                            <label htmlFor="displayVolumeMin">Vol. Min</label>
                            <br/>
                            {numberInput({name : "displayVolumeMin", placeholder : "0", min : 0, max : 999, defaultValue : 0})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeMax">Vol. Max</label>
                            <br/>
                            {numberInput({name : "displayVolumeMax", placeholder : "100", min : 0, max : 999, defaultValue : 100})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeDisabledColor">Disabled Color</label>
                            <br/>
                            {numberInput({name : "displayVolumeDisabledColor", placeholder : "23275", min : 0, max : 65535, defaultValue : 23275})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Volume Text">
                    <section className="grid grid-cols-3 px-2">
                        <section>
                            <label htmlFor="displayVolumeTextColor">Text Color</label>
                            <br/>
                            {numberInput({name : "displayVolumeTextColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeTextX">Text Position X</label>
                            <br/>
                            {numberInput({name : "displayVolumeTextX", placeholder : "303", min : 0, max : 320, defaultValue : 303})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeTextY">Text Position Y</label>
                            <br/>
                            {numberInput({name : "displayVolumeTextY", placeholder : "78", min : 0, max : 480, defaultValue : 78})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Volume Bar">
                    <section className="grid grid-cols-4 px-2">
                        <section>
                            <label htmlFor="displayVolumeBarColor">Color</label>
                            <br/>
                            {numberInput({name : "displayVolumeBarColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeBarX">Position X</label>
                            <br/>
                            {numberInput({name : "displayVolumeBarX", placeholder : "309", min : 0, max : 320, defaultValue : 309})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeBarY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayVolumeBarY", placeholder : "96", min : 0, max : 480, defaultValue : 96})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeBarWidth">Width</label>
                            <br/>
                            {numberInput({name : "displayVolumeBarWidth", placeholder : "4", min : 0, max : 320, defaultValue : 4})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeBarHeight">Height</label>
                            <br/>
                            {numberInput({name : "displayVolumeBarHeight", placeholder : "213", min : 0, max : 480, defaultValue : 213})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Volume Circle">
                    <section className="grid grid-cols-3 px-2">
                        <section>
                            <label htmlFor="displayVolumeCircleX">Position X</label>
                            <br/>
                            {numberInput({name : "displayVolumeCircleX", placeholder : "309", min : 0, max : 320, defaultValue : 309})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeCircleY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayVolumeCircleY", placeholder : "331", min : 0, max : 480, defaultValue : 331})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeCircleRadius">Circle Radius</label>
                            <br/>
                            {numberInput({name : "displayVolumeCircleRadius", placeholder : "5", min : 0, max : 320, defaultValue : 5})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeCircleLineLength">Arrow Line Length</label>
                            <br/>
                            {numberInput({name : "displayVolumeCircleLineLength", placeholder : "3", min : 0, max : 320, defaultValue : 3})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeCircleColor">Circle Color</label>
                            <br/>
                            {numberInput({name : "displayVolumeCircleColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayVolumeCircleArrowColor">Arrow Color</label>
                            <br/>
                            {numberInput({name : "displayVolumeCircleArrowColor", placeholder : "63488", min : 0, max : 65535, defaultValue : 63488})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Tabs">
                    <section className="grid grid-cols-2 px-2 gap-y-2">
                        <section>
                            <label htmlFor="displayTabsX">Position X (right adjusted)</label>
                            <br/>
                            {numberInput({name : "displayTabsX", placeholder : "320", min : 0, max : 320, defaultValue : 320})}
                        </section>
                        <section>
                            <label htmlFor="displayTabsY">Position Y</label>
                            <br/>
                            {numberInput({name : "displayTabsY", placeholder : "0", min : 0, max : 480, defaultValue : 0})}
                        </section>
                        <section>
                            <label htmlFor="displayTabsBgColorHighlighted">Background Color Highlighted</label>
                            <br/>
                            {numberInput({name : "displayTabsBgColorHighlighted", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayTabsBgColorUnselected">Background Color Unselected</label>
                            <br/>
                            {numberInput({name : "displayTabsBgColorUnselected", placeholder : "23211", min : 0, max : 65535, defaultValue : 23211})}
                        </section>
                        <section>
                            <label htmlFor="displayTabsOrientation">Orientation</label>
                            <br />
                            <select name="displayTabsOrientation" className="outline-none">
                                <option value="0" selected>Horizontal</option>
                                <option value="1">Vertical</option>
                            </select>
                        </section>
                        <section>
                            <label htmlFor="displayTabsTextColorHighlighted">Text Color Highlight</label>
                            <br/>
                            {numberInput({name : "displayTabsTextColorHighlighted", placeholder : "0", min : 0, max : 65535, defaultValue : 0})}
                        </section>
                        <section>
                            <label htmlFor="displayTabsTextColorUnselected">Text Color Unselected</label>
                            <br/>
                            {numberInput({name : "displayTabsTextColorUnselected", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayTabsSquareLength">Square Side Length</label>
                            <br/>
                            {numberInput({name : "displayTabsSquareLength", placeholder : "15", min : 0, max : 320, defaultValue : 15})}
                        </section>
                        <section>
                            <label htmlFor="displayTabsTextPaddingTop">Text Padding Top</label>
                            <br/>
                            {numberInput({name : "displayTabsTextPaddingTop", placeholder : "4", min : 0, max : 480, defaultValue : 4})}
                        </section>
                        <section>
                            <label htmlFor="displayTabsTextPaddingLeft">Text Padding Left</label>
                            <br/>
                            {numberInput({name : "displayTabsTextPaddingLeft", placeholder : "5", min : 0, max : 320, defaultValue : 5})}
                        </section>
                    </section>
                </Accordion>                

                <Accordion categoryName="Library Text">
                    <section className="grid grid-cols-3 px-2">
                        <section>
                            <label htmlFor="displayLibraryTitleColor">Title Text Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryTitleColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryArtistColor">Artist Text Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryArtistColor", placeholder : "46486", min : 0, max : 65535, defaultValue : 46486})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Library Track">
                    <section className="grid grid-cols-3 px-2 gap-y-2">
                        <section>
                            <label htmlFor="displayLibraryHighlightedRectHeight">Highlighted Track Rectangle Height</label>
                            <br/>
                            {numberInput({name : "displayLibraryHighlightedRectHeight", placeholder : "30", min : 0, max : 480, defaultValue : 30})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryHighlightedRectRadius">Highlighted Track Corner Radius</label>
                            <br/>
                            {numberInput({name : "displayLibraryHighlightedRectRadius", placeholder : "3", min : 0, max : 50, defaultValue : 3})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryHighlightedTrackBorderColor">Highlighted Track Border Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryHighlightedTrackBorderColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryTextPadTop">Text Padding Top</label>
                            <br/>
                            {numberInput({name : "displayLibraryTextPadTop", placeholder : "6", min : 0, max : 480, defaultValue : 6})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryTextPadLeft">Text Padding Left</label>
                            <br/>
                            {numberInput({name : "displayLibraryTextPadLeft", placeholder : "5", min : 0, max : 320, defaultValue : 5})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryTextRowGap">Text Row Gap</label>
                            <br/>
                            {numberInput({name : "displayLibraryTextRowGap", placeholder : "10", min : 0, max : 480, defaultValue : 10})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryTrackRowGap">Track Row Gap</label>
                            <br/>
                            {numberInput({name : "displayLibraryTrackRowGap", placeholder : "30", min : 0, max : 480, defaultValue : 30})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryRemovedTracksColor">Removed Tracks Color Text</label>
                            <br/>
                            {numberInput({name : "displayLibraryRemovedTracksColor", placeholder : "31695", min : 0, max : 65535, defaultValue : 31695})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryTrackDurationColor">Track Duration Text Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryTrackDurationColor", placeholder : "46486", min : 0, max : 65535, defaultValue : 46486})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryTrackDurationPadRight">Pad Right Track Duration</label>
                            <br/>
                            {numberInput({name : "displayLibraryTrackDurationPadRight", placeholder : "4", min : 0, max : 320, defaultValue : 4})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryBorderThickness">Border Thickness</label>
                            <br/>
                            {numberInput({name : "displayLibraryBorderThickness", placeholder : "1", min : 0, max : 480, defaultValue : 1})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Library Pages">
                    <section className="grid grid-cols-3 px-2">
                        <section>
                            <label htmlFor="displayLibraryPagesTextPadTop">Pages Text Pad Top</label>
                            <br/>
                            {numberInput({name : "displayLibraryPagesTextPadTop", placeholder : "15", min : 0, max : 480, defaultValue : 15})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryPagesTextColor">Pages Text Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryPagesTextColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Library Fetch">
                    <section className="grid grid-cols-2 px-2 gap-y-2">
                        <section>
                            <label htmlFor="displayLibraryLoadingText">Loading Text</label>
                            <br/>
                            <input 
                                className="max-w-24 border-b-2 outline-none focus:border-black ease-out duration-300"
                                type="text"
                                name="displayLibraryLoadingText" 
                                id="displayLibraryLoadingText"
                                maxLength={10}
                                minLength={1}
                                placeholder="Loading..."
                                defaultValue={"Loading..."}/>
                        </section>
                        <section>
                            <label htmlFor="displayLibraryLoadingTextColor">Loading Text Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryLoadingTextColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryLoadingFailedText">Failed To Fetch Text</label>
                            <br/>
                            <input 
                                className="max-w-48 border-b-2 outline-none focus:border-black ease-out duration-300"
                                type="text"
                                name="displayLibraryLoadingFailedText" 
                                id="displayLibraryLoadingFailedText"
                                maxLength={26}
                                minLength={1}
                                placeholder="Failed to retrieve Library"
                                defaultValue={"Failed to retrieve Library"}/>
                        </section>
                        <section>
                            <label htmlFor="displayLibraryLoadingFailedColor">Failed To Fetch Text Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryLoadingFailedColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryLoadingFailedBgColor">Failed To Fetch Text Background Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryLoadingFailedBgColor", placeholder : "23243", min : 0, max : 65535, defaultValue : 23243})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Library Queuing">
                    <section className="grid grid-cols-3 px-2 gap-y-2">
                        <section>
                            <label htmlFor="displayLibraryQueuingText">Queuing Text</label>
                            <br/>
                            <input 
                                className="max-w-24 border-b-2 outline-none focus:border-black ease-out duration-300"
                                type="text"
                                name="displayLibraryQueuingText" 
                                id="displayLibraryQueuingText"
                                maxLength={3}
                                minLength={1}
                                placeholder="..."
                                defaultValue={"..."}/>
                        </section>
                        <section>
                            <label htmlFor="displayLibraryQueuingTextPadLeft">Queuing Pad Left</label>
                            <br/>
                            {numberInput({name : "displayLibraryQueuingTextPadLeft", placeholder : "10", min : 0, max : 320, defaultValue : 10})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryQueuingTextPadRight">Queuing Pad Right</label>
                            <br/>
                            {numberInput({name : "displayLibraryQueuingTextPadRight", placeholder : "3", min : 0, max : 320, defaultValue : 3})}
                        </section>
                        <section>
                            <label htmlFor="displayLibraryQueuingTextColor">Queued/Queuing Attempt Text Color</label>
                            <br/>
                            {numberInput({name : "displayLibraryQueuingTextColor", placeholder : "65535", min : 0, max : 65535, defaultValue : 65535})}
                        </section>
                    </section>
                </Accordion>

                <Accordion categoryName="Library Queued">
                    <section className="grid grid-cols-2 px-2">
                        <section>
                            <label htmlFor="displayLibraryQueuedText">Queued Text</label>
                            <br/>
                            <input 
                                className="max-w-48 border-b-2 outline-none focus:border-black ease-out duration-300"
                                type="text"
                                name="displayLibraryQueuedText" 
                                id="displayLibraryQueuedText"
                                maxLength={14}
                                minLength={1}
                                placeholder="Added to Queue"
                                defaultValue={"Added to Queue"}/>
                        </section>
                        <section>
                            <label htmlFor="displayLibraryQueuedTextPadLeft">Queued Text Pad Left</label>
                            <br/>
                            {numberInput({name : "displayLibraryQueuedTextPadLeft", placeholder : "3", min : 0, max : 320, defaultValue : 3})}
                        </section>
                    </section>
                </Accordion>

                <button 
                    type="submit" 
                    className="max-w-fit my-6 p-2 bg-skm2-orange text-white open-sans-500 rounded-[0.25em] text-md">
                    Save Config
                </button>

                {/* <section>

                    <label htmlFor="color">Color</label>
                    <input type="color" id="color" name="color" defaultValue="#e66465" />

                </section> */}
            </form>
        </section>
    )
}

interface pinNameProp
{
    selectName : string;
}

export function pinOptions({selectName} : pinNameProp)
{
    return (
        <select name={selectName} id={selectName} className="outline-none">
            <option value="38">Leftmost</option>
            <option value="1">Leftmiddle</option>
            <option value="39">Middle</option>
            <option value="42">Rightmiddle</option>
            <option value="40">Rightmost</option>
            <option value="41">Rotary Enccoder</option>
            <option value="69">Disable</option>
        </select>
    )
}

interface numberInputProps
{
    defaultValue : number;
    min : number;
    max : number;
    placeholder: string;
    name : string;
    // width : number;
}

export function numberInput({name, placeholder, min, max, defaultValue} : numberInputProps)
{
    return (
        <input
            className="max-w-20 border-b-2 outline-none focus:border-black ease-out duration-300" 
            type="number"
            id={name}
            name={name}
            placeholder={placeholder}
            min={min}
            max={max} 
            defaultValue={defaultValue}/>
    )
}