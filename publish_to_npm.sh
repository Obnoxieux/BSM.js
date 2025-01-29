#!/bin/bash

# Function to handle user confirmation
confirm() {
    # call with a prompt string or use a default
    read -r -p "${1:-Are you sure? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY])
            true
            ;;
        *)
            false
            ;;
    esac
}

echo "Running tests..."
if pnpm run test; then
    echo "Tests passed!"
else
    echo "Tests failed. Exiting..."
    exit 1
fi

echo "Building project..."
if pnpm run build; then
    echo "Build successful!"
else
    echo "Build failed. Exiting..."
    exit 1
fi

echo "Performing dry run of publish..."
if pnpm publish --dry-run; then
    echo "Dry run publish successful, please review the output."
else
    echo "Dry run publish failed. Exiting..."
    exit 1
fi

if confirm "Do you want to proceed with the actual publish? [y/N]"; then
    echo "Publishing..."
    if pnpm publish; then
        echo "Publish successful!"
    else
        echo "Publish failed."
    fi
else
    echo "Publish aborted by user."
fi
