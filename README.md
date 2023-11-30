# Anti-debugger

Anti-debugger is a Firefox WebExtension which renders `debugger` statements in JavaScript code inert by changing all references to `debugger` to a string. This prevents the misuse of `debugger` statements, which can be used maliciously to hinder the inspection of JavaScript running in the browser.

As this extension will change all references to `debugger` in all HTTP responses, it may lead to unexpected behavior in some websites.

## Installation

As this extension is not yet available on the Firefox Add-ons store, you can install it as a temporary extension in developer mode. Follow these steps to get started:

1. **Download the Extension**: Clone the repository or download the ZIP file of the extension to your local machine.

    ```sh
    git clone https://github.com/taneltm/anti-debugger.git
    ```

    Or download the ZIP and extract it to a preferred location on your computer.

2. **Open Firefox**: Chrome does not support HTTP interception in it's extensions.

3. **Access Add-on Debugging**: Type `about:debugging` in the address bar and press Enter. Click on "This Firefox" (or "This Nightly" if you are using Firefox Nightly) on the left sidebar.

4. **Load Temporary Add-on**: Click on "Load Temporary Add-on..." and navigate to the directory where you have saved the Anti-debugger extension. Select any file within the extension's folder (usually the `manifest.json` file) and click "Open".

5. **Extension Active**: The Anti-debugger extension should now be active and listed in the "Temporary Extensions" section. It will remain active until you restart Firefox.

## Usage

Once installed, the extension will automatically neutralize any `debugger` statements in JavaScript code across all web pages. There is no need for any manual intervention.

If you need to perform legitimate debugging:

- Navigate to `about:debugging`.
- Find the Anti-debugger extension under "Temporary Extensions".
- Click "Disable" to turn off the extension temporarily.
- When you're done, you can re-enable it by clicking "Enable".

## Demo page

You can serve the demo-page in a web server to test the extension.

## Contributing

Contributions to Anti-debugger are welcome! If you have suggestions for improvements or bug reports, please open an issue