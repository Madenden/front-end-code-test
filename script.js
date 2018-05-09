$(document).ready(showBlockSize);
$(window).resize(showBlockSize);

function showBlockSize() {
    let top_1 = $('.top-1'), top_2 = $('.top-2'), middle_1 = $('.middle-1'), middle_2 = $('.middle-2'),
        bottom_1 = $('.bottom-1'), bottom_2 = $('.bottom-2');

    getSize(top_1);
    getSize(top_2);
    getSize(middle_1);
    getSize(middle_2);
    getSize(bottom_1);
    getSize(bottom_2);

    function getSize(className) {
        let widthClass = className.width();
        let heightClass = className.height();

        className.find('p').text(`${widthClass} x ${heightClass}`);
    }
}