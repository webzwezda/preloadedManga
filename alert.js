var imageGallery = [
    "pic/manga/OneMangaDay_000_001.png",
    "pic/manga/OneMangaDay_000_002.png",
    "pic/manga/OneMangaDay_001.png",
    "pic/manga/OneMangaDay_002.png",
    "pic/manga/OneMangaDay_003.png",
    "pic/manga/OneMangaDay_004.png",
    "pic/manga/OneMangaDay_005.png",
    "pic/manga/OneMangaDay_006.png",
    "pic/manga/OneMangaDay_007.png",
    "pic/manga/OneMangaDay_008.png",
    "pic/manga/OneMangaDay_009.png",
    "pic/manga/OneMangaDay_010.png",
    "pic/manga/OneMangaDay_011.png",
    "pic/manga/OneMangaDay_012.png",
    "pic/manga/OneMangaDay_013.png",
    "pic/manga/OneMangaDay_014.png",
    "pic/manga/OneMangaDay_015.png",
    "pic/manga/OneMangaDay_016.png",
    "pic/manga/OneMangaDay_017.png",
    "pic/manga/OneMangaDay_018.png",
    "pic/manga/OneMangaDay_019.png",
    "pic/manga/OneMangaDay_999.png",
    "pic/manga/OneMangaDay_CheeZa_001.png",
    "pic/manga/OneMangaDay_CheeZa_002.png",
    "pic/manga/OneMangaDay_CheeZa_003.png",
];

var imgCount = 0;
var totalImgs = imageGallery.length - 1;

function nextClick() {
    var prelImg;
    imgCount++;
    if (imgCount > totalImgs) imgCount = 0;
    prelImg = imgCount + 1;
    if (prelImg > totalImgs) prelImg = 0;
    document.getElementById("IMGdisplayer").src = imageGallery[imgCount];
    document.getElementById("IMGpreloader").src = imageGallery[prelImg];
    return false;
}

function prevClick() {
    imgCount--;
    if (imgCount < 0) imgCount = totalImgs;
    document.getElementById("IMGdisplayer").src = imageGallery[imgCount];
    return false;
}
