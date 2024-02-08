# replit.nix
{ pkgs }: {
  environment.systemPackages = with pkgs; [
    nodejs
  ];
}
