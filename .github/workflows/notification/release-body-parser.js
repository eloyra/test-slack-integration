// Deno reads stdin from the Deno.args parameter and outputs stdout with the console.log method.

if (Deno.args.length === 0) {
        console.log();
} else if (Deno.args.length > 1) {
        console.log(
                Deno.args.map((arg) => arg.replaceAll('"', '\\"').replaceAll('`', '\\`')).join(' ')
        );
} else {
        console.log(Deno.args[0].replaceAll('"', '\\"').replaceAll('`', '\\`'));
}
