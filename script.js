// Variable to control the state of the mobile
let isMobileOn = true;

// Function to simulate mobile features
function useMobile() {
    console.log("Mobile is on.");

    // Simulate using various features
    do {
        let choice = prompt("Choose an option:\n1. Make a call\n2. Send a message\n3. Check battery\n4. Restart mobile\n5. Turn off mobile");

        switch (choice) {
            case '1':
                console.log("Calling...");
                break;
            case '2':
                console.log("Sending message...");
                break;
            case '3':
                console.log("Battery level: 80%");
                break;
            case '4':
                console.log("Restarting mobile...");
                console.log("Mobile is off.");
                isMobileOn = false;
                break;
            case '5':
                console.log("Turning off mobile...");
                console.log("Mobile is off.");
                isMobileOn = false;
                break;
            default:
                console.log("Invalid option.");
        }

    } while (isMobileOn);

    console.log("Mobile is off.");
}

// Start using the mobile
useMobile();
