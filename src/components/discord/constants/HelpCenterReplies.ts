import HelpCenterLinks from "./HelpCenterLinks.js";

export default {
    CLOUDFLARE_CONN_HELP: `I see you're having trouble with Cloudflare. Here are some things to try:

1. Make sure that your Mac is connected to the internet
2. (Android) Temporarily switch your phone to cellular data. Then re-open the app to see if it connects.
    - If it does, your issue was a DNS issue, and you can re-enable your WiFi after 10 minutes or so.
3. (Server) Check to see if you can access your Server URL from your Mac's Browser
4. Check for any alerts/notifications on your Server dashboard
    - If you see any related to Cloudflare, note the error at the end of the message`,
    
    NO_SUCH_HOST_HELP: `It looks like you're having a DNS issue. Please make sure that your Mac is connected to the internet by opening a browser and navigating to a website. If you can't access the internet, you may need to troubleshoot your network connection.
If you can access the internet, you may have something blocking the proxy service connection.
If you have a DNS blocker, VPN, firewall, or other network security software, try disabling it temporarily to see if that resolves the issue.
You may need to add an exception for the proxy service host.`,

    NO_NOTIFICATIONS_HELP: `If you're not receiving notifications, please read this help center article: [Not Receiving Notifications - BlueBubbles Documentation](${HelpCenterLinks.no_notifications})`,

    HOW_TO_DONATE_HELP: `If you're looking to support the project, you have a few options:

- [PayPal | One-Time Donation](${HelpCenterLinks.donate})
- [GitHub | Sponsor Us](${HelpCenterLinks.sponsor})
- [Venmo | @bluebubblesmessaging](https://venmo.com/code?user_id=3296196424630272198)

Thank you for your support!`,

    BEST_MACOS_HELP: `To find out which macOS version is best for you, please visit our [FAQ page](${HelpCenterLinks.faq}) and find the "What is the best macOS device and version to use?" section.
When making your decision, consider what hardware you are using. For instance, if you are using an older Mac Mini, it may not natively support the latest macOS version.
If you have older hardware and still would like to install newer macOS versions, you may want to look into using [OpenCore Legacy Patcher (OCLP)](https://dortania.github.io/OpenCore-Legacy-Patcher/).`,

    WHICH_PROXY_HELP: `If you're looking for a proxy service recommendation, a Reddit user has graciously put together a breakdown of the pros and cons of each service. You can find it here: [Positives and Negatives with each Proxy option in BlueBubbles | Reddit](https://www.reddit.com/r/BlueBubbles/comments/1au7u4n/positives_and_negatives_with_each_proxy_option_in/).`,

    PORT_FORWARDING_HELP: `If you'd like to learn more about port forwarding, see our help center article: [Port Forwarding & Dynamic DNS - BlueBubbles Documentation](https://docs.bluebubbles.app/server/basic-guides/port-forwarding-and-dynamic-dns)`,
}