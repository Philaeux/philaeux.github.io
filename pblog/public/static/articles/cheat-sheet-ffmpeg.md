# ffmpeg

* 16:9 Resolutions divisible by 8

```
128x72
256x144
384x216
512x288
640x360 (360p)
768x432
896x504
1024x576
11252x648
1280x720 (720p)
1408x792
1536x864
1664x936
1792x1008
1920x1080 (1080p FullHD)
2048x1152
2176x1224
2304x1296
2432x1368
2560x1440 (1440p WQHD)
...
3840x2160 (4K UHDTV1)
...
5120x2880 (5K Retina)
...
7680x4320 (8K UHDTV2)
```

* Some 4:3 resolutions

```
160x120
256x192
320x240
400x300
512x384
640x480
800x600
960x720
1024x768
1280x960
1400x1050
1440x1080
1600x1200
1856x1392
1920x1440
2048x1536
2560x1920
3200x2400
4096x3072
```

* Video scale filter: `-vf "scale=widthxheight"`
* 4:3 to 16:9 Sidebar black: `-vf "scale=1280:720:force_original_aspect_ration=decrease,pad=1280:720:-1:-1:color=black"`
* Turn 5.1 audio to Stereo: `-ac 2`
* Codecs

```
VP9 libvpx-vp9
Opus libopus
AV1 liboam-av1 | libsvtav1 | librav1e
```

* Quality options

```
VP9 Video CRF
-crf 30 -b:v 0
Opus Audio
auto

```
* Start time: `-ss 00:01:00.000`
* End time: `-to  00:01:00.000`
* Duration: `-t  00:01:00.000`
* Fast Start time: `ffmpeg -ss 01:00:00.000 -copyts -i <> ...`
