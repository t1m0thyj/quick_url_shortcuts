chrome.commands.onCommand.addListener(function(command) {
    switch (command) {
        case "Open URL shortcut #01":
            openUrl('urlShortcut1');
            break;
        case "Open URL shortcut #02":
            openUrl('urlShortcut2');
            break;
        case "Open URL shortcut #03":
            openUrl('urlShortcut3');
            break;
        case "Open URL shortcut #04":
            openUrl('urlShortcut4');
            break;
        case "Open URL shortcut #05":
            openUrl('urlShortcut5');
            break;
        case "Open URL shortcut #06":
            openUrl('urlShortcut6');
            break;
        case "Open URL shortcut #07":
            openUrl('urlShortcut7');
            break;
        case "Open URL shortcut #08":
            openUrl('urlShortcut8');
            break;
        case "Open URL shortcut #09":
            openUrl('urlShortcut9');
            break;
        case "Open URL shortcut #10":
            openUrl('urlShortcut10');
            break;
        case "Open URL shortcut #11":
            openUrl('urlShortcut11');
            break;
        case "Open URL shortcut #12":
            openUrl('urlShortcut12');
            break;
        case "Open URL shortcut #13":
            openUrl('urlShortcut13');
            break;
        case "Open URL shortcut #14":
            openUrl('urlShortcut14');
            break;
        case "Open URL shortcut #15":
            openUrl('urlShortcut15');
            break;
        case "Open URL shortcut #16":
            openUrl('urlShortcut16');
            break;
        case "Open URL shortcut #17":
            openUrl('urlShortcut17');
            break;
        case "Open URL shortcut #18":
            openUrl('urlShortcut18');
            break;
        case "Open URL shortcut #19":
            openUrl('urlShortcut19');
            break;
        case "Open URL shortcut #20":
            openUrl('urlShortcut20');
            break;
        case "Open URL shortcut #21":
            openUrl('urlShortcut21');
            break;
        case "Open URL shortcut #22":
            openUrl('urlShortcut22');
            break;
        case "Open URL shortcut #23":
            openUrl('urlShortcut23');
            break;
        case "Open URL shortcut #24":
            openUrl('urlShortcut24');
            break;
        case "Open URL shortcut #25":
            openUrl('urlShortcut25');
            break;
	}
});

function openUrl(key) {
    const shortcutNumber = key.replace('urlShortcut', '');
    const openInNewTabKey = `openInNewTabShortcut${shortcutNumber}`;

    chrome.storage.sync.get([key, openInNewTabKey], function(result) {
        const urlString = result[key];
        try {
            const url = new URL(urlString);
            if (result[openInNewTabKey] !== false) {
                chrome.tabs.create({ url: url.href });
            } else {
                chrome.tabs.update({ url: url.href });
            }
        } catch (error) {
            console.warn('Quick URL Shortcuts tried opening an invalid URL:', error);
        }
    });
}
