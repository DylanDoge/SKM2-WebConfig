"use server";

import { z } from "zod";

export default async function createConfig(fd : FormData)
{
    console.log(fd.get('displayWiFiX'));
    console.log(fd.entries())
    console.log(Object.fromEntries(fd))
    console.log(Object.keys(Object.fromEntries(fd)).length)

    let newConfig = {
        timestamp: Math.trunc(Date.now() / 1000),
        title: fd.get('configName'),
        
        display:
        {
            coverArt:
            {
                w:              300,
                h:              300,
                x:              Number(fd.get('displayCoverArtX')),
                y:              Number(fd.get('displayCoverArtY')),
            },

            logo:
            {
                x:              Number(fd.get('displayLogoX')),
                y:              Number(fd.get('displayLogoY')),
            },

            shuffle:
            {
                color_enabled:  Number(fd.get('displayShuffleColor')),
                color_disabled: Number(fd.get('displayShuffleColorDisabled')),
                x:              Number(fd.get('displayShuffleX')),
                y:              Number(fd.get('displayShuffleY'))
            },

            version:
            {
                text:           "SKM2 v2.20 Preview",
                color:          Number(fd.get('displayVersionColor')),
                x:              Number(fd.get('displayVersionX')),
                y:              Number(fd.get('displayVersionY'))
            },

            wifi:
            {
                text:           fd.get('displayWiFiText'),
                x:              Number(fd.get('displayWiFiX')),
                y:              Number(fd.get('displayWiFiY')),
                pad_left:       3,
                pad_right:      3,
                text_height:    3,
                color_text:     Number(fd.get('displayWiFiTextColor'))
            },

            infoPOST:
            {
                color_text:     Number(fd.get('displayBootTextColor')),
                color_outerBar: 65535,
                color_innerBar: Number(fd.get('displayBootProgressRectInnerColor')),
                text_x:         Number(fd.get('displayBootTextX')),
                text_y:         Number(fd.get('displayBootTextY')),
                x_clear:        0,
                w_clear:        290,
                h_clear:        28,
                x:              30,
                y:              300,
                w:              Number(fd.get('displayBootProgressRectW')),
                h:              Number(fd.get('displayBootProgressRectH')),
                radius:         Number(fd.get('displayBootProgressRectRadius')),
            },

            playPauseIcon:
            {
                x:              Number(fd.get('displayPlayPauseIconX')),
                y:              Number(fd.get('displayPlayPauseIconY')),
                h_triangle:     Number(fd.get('displayPlayPauseHeight')),
                pause_thickness:Number(fd.get('displayPauseBarThickness')),
                pause_gap:      Number(fd.get('displayPauseBarGap')),
                h_pause:        Number(fd.get('displayPlayPauseHeight')),
                color_play:     Number(fd.get('displayPlayIconColor')),
                color_pause:    Number(fd.get('displayPauseIconColor'))
            },

            title:
            {
                h_title_rect:   28,
                pad_left:       Number(fd.get('displayTitleArtist_PadLeft')),
                text_OriginX:   Number(fd.get('displayTitleArtistX')),
                text_title_OriginY:   Number(fd.get('displayTitleArtist_TitleY')),
                color_title_text: Number(fd.get('displayTitleArtist_TitleColor')),
                text_artist_OriginY: Number(fd.get('displayTitleArtist_ArtistY')),
                h_artist_rect:  16,
                color_artist_text: Number(fd.get('displayTitleArtist_ArtistColor'))
            },

            timeTextShared:
            {
                h_rect:         7
            },

            durationText:
            {
                x:              Number(fd.get('displayTrackDurationX')),
                y:              Number(fd.get('displayTrackDurationY')),
                color_text:     Number(fd.get('displayTrackDurationColor'))
            },

            progressText:
            {
                x:              Number(fd.get('displayTrackProgressX')),
                y:              Number(fd.get('displayTrackProgressY')),
                color_text:     Number(fd.get('displayTrackProgressColor')),
            },

            general:
            {
                color_bg:       Number(fd.get('displayGeneralBgColor'))
            },

            progressBar:
            {
                x:              Number(fd.get('displayProgressBarX')),
                y:              Number(fd.get('displayProgressBarY')),
                w:              Number(fd.get('displayProgressBarWidth')),
                h:              Number(fd.get('displayProgressBarHeight')),
                color_fg:       Number(fd.get('displayProgressBarColorFg')),
                color_bg:       Number(fd.get('displayProgressBarColorBg')),
            },

            coverArt_loading:
            {
                text:           fd.get('displayCoverArtLoading_Text'),
                color_text:     Number(fd.get('displayCoverArtLoading_TextColor')),
            },

            volumeShared:
            {
                color_text_disabled: Number(fd.get('displayVolumeDisabledColor'))
            },

            volumeText:
            {
                color_text: Number(fd.get('displayVolumeTextColor')),
                x: Number(fd.get('displayVolumeTextX')),
                y: Number(fd.get('displayVolumeTextY')),
                pad_left_2digit: 4,
                pad_left_1digit: 8,
                h_text: 7,
            },

            volumeBar:
            {
                color_rect:     Number(fd.get('displayVolumeBarColor')),
                x:              Number(fd.get('displayVolumeBarX')),
                y:              Number(fd.get('displayVolumeBarY')),
                h:              Number(fd.get('displayVolumeBarHeight')),
                w:              Number(fd.get('displayVolumeBarWidth')),
                volume_max:     Number(fd.get('displayVolumeMax')),
                volume_min:     Number(fd.get('displayVolumeMin')),
            },

            volumeCircle:
            {
                volumeStep:     16.6666,
                color_arrow:    Number(fd.get('displayVolumeCircleArrowColor')),
                color:          Number(fd.get('displayVolumeCircleColor')),
                radius:         Number(fd.get('displayVolumeCircleRadius')),
                x:              Number(fd.get('displayVolumeCircleX')),
                y:              Number(fd.get('displayVolumeCircleY')),
                line_length:    Number(fd.get('displayVolumeCircleLineLength'))
            },

            tabs:
            {
                squareLength:   15,
                topTextPadding: Number(fd.get('displayTabsTextPaddingTop')),
                leftTextPadding: Number(fd.get('displayTabsTextPaddingLeft')),
                middleLine_height: 1,
                bg_color_highlight: Number(fd.get('displayTabsBgColorHighlighted')),
                bg_color_unselected: Number(fd.get('displayTabsBgColorUnselected')),
                text_color_highlight: Number(fd.get('displayTabsTextColorHighlighted')),
                text_color_unselected: Number(fd.get('displayTabsTextColorUnselected')),
                orientation:    (fd.get('displayTabsOrientation') === '0') ? false : true,
                x:              Number(fd.get('displayTabsX')),
                y:              Number(fd.get('displayTabsY'))
            },

            library:
            {
                pad_top:        Number(fd.get('displayLibraryTextPadTop')),
                pad_left:       Number(fd.get('displayLibraryTextPadLeft')),
                text_row_gap:   Number(fd.get('displayLibraryTextRowGap')),
                track_row_gap:  Number(fd.get('displayLibraryTrackRowGap')),
                color_text_removed: Number(fd.get('displayLibraryRemovedTracksColor')),
                color_text_title: Number(fd.get('displayLibraryTitleColor')),
                color_text_artist: Number(fd.get('displayLibraryArtistColor')),
                color_text_duration: Number(fd.get('displayLibraryTrackDurationColor')),
                pad_right_duration: Number(fd.get('displayLibraryTrackDurationPadRight')),
                border_thickness: Number(fd.get('displayLibraryBorderThickness')),
                pages_pad_top:  Number(fd.get('displayLibraryPagesTextPadTop')),
                color_text_pages: Number(fd.get('displayLibraryPagesTextColor'))
            },

            library_loading:
            {
                text:           fd.get('displayLibraryLoadingText'),
                color_text:     Number(fd.get('displayLibraryLoadingTextColor'))
            },

            library_failed:
            {
                text:           fd.get('displayLibraryLoadingFailedText'),
                color_text_bg:  Number(fd.get('displayLibraryLoadingFailedBgColor')),
                color_text:     Number(fd.get('displayLibraryLoadingFailedColor')),
            },

            library_highlight:
            {
                h_rect:         Number(fd.get('displayLibraryHighlightedRectHeight')),
                corner_radius_rect: Number(fd.get('displayLibraryHighlightedRectRadius')),
                color_border:   Number(fd.get('displayLibraryHighlightedTrackBorderColor'))
            },

            library_queue:
            {
                text_attempt:   fd.get('displayLibraryQueuingText'),
                pad_left:       Number(fd.get('displayLibraryQueuingTextPadLeft')),
                pad_right:      Number(fd.get('displayLibraryQueuingTextPadRight')),
                text_height:    17,
                color_text:     Number(fd.get('displayLibraryQueuingTextColor')),
                text_finished:  fd.get('displayLibraryQueuingText'),
                pad_left_finished: Number(fd.get('displayLibraryQueuedTextPadLeft')),
            }
        },

        pins:
        {
            switches: 
            {
                playPause:  Number(fd.get('PPpin')),
                prev:       Number(fd.get('PREVpin')),
                next:       Number(fd.get('NEXTpin')),
                like:       Number(fd.get('LIKEpin')),
                shuffle:    Number(fd.get('SHUFFLEpin')),
                tab:        Number(fd.get('TABpin'))
            },
            
            rotary:
            {
                A: (fd.get('REdir') === "clockwise") ? 17 : 18,
                B: (fd.get('REdir') === "clockwise") ? 18 : 17
            }
        },

        config: 
        {
            interval:
            {
                refresh:
                {
                    playbackState:              Number(fd.get('RefreshPlaybackState')),
                    playbackState_Inactive:     Number(fd.get('RefreshPlaybackStateInactive')),
                    playbackState_UpdateLock:   Number(fd.get('RefreshPlaybackStateUpdateLock')),
                    display:                    Number(fd.get('RefreshDisplay'))
                },
                send:
                {
                    skip_track:     10000,
                    rewind_track:   10000,
                    skip_episode:   Number(fd.get('SendSkipEpisode')),
                    rewind_episode: Number(fd.get('SendRewindEpisode')),
                    encoder:        Number(fd.get('SendEncoderDelay'))
                }
            }
        },

        tabs:
        {
            selected_tab: Number(fd.get('TabSelectedDefault')),
            tab_letters: [fd.get('TabLetterPlayer'), fd.get('TabLetterLibrary')],
        },

        library:
        {
            tracksPerPage: 9,
        },
        
        volume:
        {
            volume_max: Number(fd.get('VolumeMax')),
            volume_min: Number(fd.get('VolumeMin'))
        },

        files:
        {
            path:
            {
                wallpaperImg: "/img/wallpep.jpg"
            },
            srcURL:
            {
                wallpaperImg: "https://i.imgur.com/EqDPmZ0.jpeg"
            }
        },

        wallpaper:
        {
            ID: 1
        }
    }
    console.log(JSON.stringify(newConfig))
}   