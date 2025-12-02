// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCommunityNativeMarket",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapacitorCommunityNativeMarket",
            targets: ["NativeMarketPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0-beta.0")
    ],
    targets: [
        .target(
            name: "NativeMarketPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/NativeMarketPlugin"),
        .testTarget(
            name: "NativeMarketPluginTests",
            dependencies: ["NativeMarketPlugin"],
            path: "ios/Tests/NativeMarketPluginTests")
    ]
)
