type Props = { fill?: string; className?: string };

export default function TitleUtmUrl(props: Props) {
  const { className = "", fill = "currentColor" } = props;
  return (
    <svg class={className} fill={fill} width="318" height="40" viewBox="0 0 318 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.0001 4.4L30.6001 7.96H11.6401L11.0401 14.28C10.8001 16.8933 10.4534 19.6 10.0001 22.4C9.54672 25.1733 8.85339 28.0133 7.92005 30.92C6.98672 33.8 5.66672 36.7333 3.96005 39.72L0.680054 37.6C2.28005 34.8533 3.50672 32.1733 4.36005 29.56C5.24005 26.92 5.88005 24.3333 6.28005 21.8C6.70672 19.24 7.04005 16.72 7.28005 14.24L8.24005 4.4H18.1201L18.5201 0.439998H22.2401L21.8001 4.4H31.0001Z" />
      <path d="M45.5922 2.4C45.1922 3.6 44.7122 4.78667 44.1522 5.96H48.9522L49.5522 0.479997H53.2322L52.6322 5.96H62.3522L61.9922 9.44H52.2722L51.6322 15.52H62.1522L61.7922 19H36.1922L36.5922 15.52H47.9522L48.5922 9.44H42.3122C41.4322 10.96 40.4189 12.44 39.2722 13.88L36.3122 11.92C37.6456 10.3467 38.8189 8.69333 39.8322 6.96C40.8456 5.2 41.6856 3.30666 42.3522 1.28L45.5922 2.4ZM58.7922 26.44L57.5522 38.08H36.7922L38.3922 23.04H55.5122C56.7922 23.04 57.6856 23.36 58.1922 24C58.7256 24.6133 58.9256 25.4267 58.7922 26.44ZM40.8722 34.64H54.1522L55.0722 26.48H41.7522L40.8722 34.64Z" />
      <path d="M94.2244 24.6L91.2244 26.04C91.0644 25.64 90.9044 25.24 90.7444 24.84C90.5844 24.4133 90.4111 24 90.2244 23.6C89.0778 23.76 87.9311 23.9067 86.7844 24.04C85.6644 24.1467 84.5311 24.24 83.3844 24.32L82.5444 33.6C82.1978 37.6533 80.4644 39.68 77.3444 39.68C76.2511 39.68 75.2778 39.28 74.4244 38.48C73.5711 37.7067 72.9044 36.5467 72.4244 35L75.8244 33.72C76.1444 34.6267 76.4244 35.2533 76.6644 35.6C76.9311 35.92 77.2378 36.08 77.5844 36.08C78.0111 36.08 78.3044 35.88 78.4644 35.48C78.6511 35.08 78.7844 34.4133 78.8644 33.48L79.6644 24.52C77.8511 24.6 76.0378 24.6533 74.2244 24.68C72.4378 24.68 70.6378 24.6667 68.8244 24.64L68.7444 21.36C69.7844 21.3867 70.8111 21.4 71.8244 21.4C74.4911 20.0667 76.8378 18.7067 78.8644 17.32C77.3444 17.4267 75.8244 17.5067 74.3044 17.56C72.8111 17.5867 71.4911 17.5733 70.3444 17.52L70.3044 14.2C70.8911 14.2267 71.5578 14.24 72.3044 14.24C73.7444 13.3067 75.0511 12.32 76.2244 11.28C77.3978 10.24 78.5178 9.12 79.5844 7.92C78.0911 8.26667 76.5711 8.57333 75.0244 8.84C73.4778 9.10667 71.9044 9.33333 70.3044 9.52L69.7844 6.12C73.6244 5.61333 77.2511 4.96 80.6644 4.16C84.0778 3.33333 87.2911 2.26667 90.3044 0.959998L91.6244 4C90.2378 4.61333 88.8111 5.18667 87.3444 5.72C85.9044 6.22667 84.4244 6.68 82.9044 7.08L83.9844 7.96C83.1311 9.08 82.2244 10.1333 81.2644 11.12C80.3311 12.1067 79.2644 13.0933 78.0644 14.08C79.0244 14.0533 79.9711 14.0133 80.9044 13.96C81.8378 13.88 82.7044 13.8133 83.5044 13.76C84.8911 12.5333 86.2511 11.1733 87.5844 9.68L89.9444 11.84C88.1311 13.8133 86.3578 15.5467 84.6244 17.04C82.8911 18.5333 80.9444 19.9333 78.7844 21.24C80.4378 21.1867 82.1044 21.0933 83.7844 20.96C85.4644 20.8267 87.1444 20.6533 88.8244 20.44C88.5311 19.8533 88.2378 19.28 87.9444 18.72C87.6511 18.16 87.3444 17.6133 87.0244 17.08L89.9844 15.64C90.7844 16.9467 91.5178 18.36 92.1844 19.88C92.8778 21.3733 93.5578 22.9467 94.2244 24.6ZM93.5844 35.68L90.2644 37.72C89.6244 35.9333 88.8644 34.2133 87.9844 32.56C87.1044 30.9067 86.1978 29.4133 85.2644 28.08L88.4244 26.04C89.3844 27.4267 90.3311 28.9867 91.2644 30.72C92.1978 32.4533 92.9711 34.1067 93.5844 35.68ZM68.3044 37.56L65.5844 35C67.0244 33.6667 68.2644 32.3067 69.3044 30.92C70.3711 29.5067 71.3444 27.9467 72.2244 26.24L75.3444 28C73.6911 31.52 71.3444 34.7067 68.3044 37.56Z" />
      <path d="M116.417 32.96C116.843 34.9067 117.537 35.88 118.497 35.88C119.11 35.88 119.577 35.6667 119.897 35.24C120.217 34.7867 120.457 33.8267 120.617 32.36L123.977 0.479997H127.577L124.177 32.8C123.99 34.8267 123.47 36.4 122.617 37.52C121.763 38.6667 120.51 39.24 118.857 39.24C117.39 39.24 116.163 38.76 115.177 37.8C114.217 36.84 113.603 35.4267 113.337 33.56L116.417 32.96ZM96.9366 36.68C99.2299 35 101.217 33.16 102.897 31.16C104.577 29.16 105.99 27 107.137 24.68C106.603 23.88 106.043 23.1467 105.457 22.48C104.87 21.7867 104.27 21.1333 103.657 20.52C102.777 21.9333 101.817 23.24 100.777 24.44L98.2966 22C99.6833 20.3733 100.857 18.6267 101.817 16.76C102.803 14.8933 103.603 13 104.217 11.08C104.83 9.13333 105.297 7.24 105.617 5.4H101.377L101.737 2.16L115.937 2.2L115.577 5.44H109.057C108.817 6.8 108.537 8.13333 108.217 9.44H111.257C112.137 9.44 112.857 9.70667 113.417 10.24C114.003 10.7467 114.217 11.6533 114.057 12.96C113.79 15.1733 113.297 17.48 112.577 19.88C111.883 22.2533 110.923 24.6267 109.697 27C108.497 29.3467 107.003 31.5867 105.217 33.72C103.43 35.8533 101.337 37.7733 98.9366 39.48L96.9366 36.68ZM114.897 29.68L117.697 3.4H121.097L118.337 29.68H114.897ZM105.217 17.6C106.39 18.6667 107.51 19.8933 108.577 21.28C109.51 18.7467 110.203 15.9867 110.657 13H107.137C106.87 13.7733 106.577 14.5467 106.257 15.32C105.937 16.0933 105.59 16.8533 105.217 17.6Z" />
      <path d="M130.609 39.2L134.569 1.76H155.889C156.875 1.76 157.635 2.02666 158.169 2.56C158.729 3.06667 158.955 3.8 158.849 4.76L155.889 32.8C155.729 34.4533 155.355 35.76 154.769 36.72C154.209 37.68 153.515 38.3467 152.689 38.72C151.862 39.12 150.982 39.32 150.049 39.32C148.742 39.32 147.595 38.8667 146.609 37.96C145.649 37.08 145.022 35.8267 144.729 34.2L147.529 33.48C147.902 35.2133 148.715 36.08 149.969 36.08C150.715 36.08 151.289 35.7733 151.689 35.16C152.115 34.52 152.422 33.3333 152.609 31.6V31.44L150.249 32.24C150.062 31.0667 149.862 29.92 149.649 28.8C149.462 27.6533 149.249 26.5333 149.009 25.44C147.915 28.16 146.662 30.72 145.249 33.12L142.569 31.76C143.395 30.48 144.155 29.12 144.849 27.68L142.609 28.8C142.289 27.0933 141.929 25.4133 141.529 23.76C140.889 25.4133 140.209 27 139.489 28.52C138.769 30.0133 137.995 31.4533 137.169 32.84L134.849 31.44L134.009 39.2H130.609ZM153.889 7.56C153.035 12.44 151.982 16.8133 150.729 20.68C151.102 22.2267 151.462 23.8133 151.809 25.44C152.155 27.0667 152.462 28.72 152.729 30.4L155.409 5H137.609L134.929 30.4C135.969 28.64 136.929 26.8 137.809 24.88C138.689 22.9333 139.489 20.84 140.209 18.6C139.782 17.1067 139.329 15.6667 138.849 14.28C138.395 12.8667 137.929 11.5067 137.449 10.2L139.889 8.64C140.502 10.1333 141.089 11.76 141.649 13.52C142.182 11.3867 142.662 9.10667 143.089 6.68L145.889 7.32C145.702 8.46667 145.489 9.58667 145.249 10.68L147.329 9.52C147.995 11.28 148.649 13.2267 149.289 15.36C149.635 14.0267 149.955 12.6667 150.249 11.28C150.542 9.89333 150.822 8.45333 151.089 6.96L153.889 7.56ZM143.209 18.84C143.555 20.1467 143.889 21.4933 144.209 22.88C144.529 24.2667 144.835 25.68 145.129 27.12C146.142 25.04 147.049 22.7867 147.849 20.36C147.422 18.7333 146.982 17.1733 146.529 15.68C146.075 14.16 145.609 12.6933 145.129 11.28C144.569 13.9467 143.929 16.4667 143.209 18.84Z" />
      <path d="M188.361 34.28L187.961 37.8H168.361L168.761 34.28H172.681L175.441 7.96H178.761L176.001 34.28H179.121L182.761 0.479997H186.121L184.681 13.68H189.321L188.921 17.36H184.281L182.481 34.28H188.361ZM162.681 35.92L161.321 32.48C162.601 32 163.828 31.4933 165.001 30.96L166.721 14.6H163.761L164.121 11.2H167.081L168.121 1.04H171.521L170.441 11.2H173.321L172.961 14.6H170.081L168.561 29.28C169.494 28.8 170.374 28.3067 171.201 27.8L172.801 30.96C171.201 31.8933 169.548 32.7733 167.841 33.6C166.134 34.4 164.414 35.1733 162.681 35.92Z" />
      <path d="M195.913 30.72L193.433 29.32C194.74 26.5733 195.887 23.72 196.873 20.76C197.86 17.8 198.673 14.84 199.313 11.88H196.273L196.633 8.52H201.033L201.913 0.479997H205.353L204.473 8.52H206.633L206.273 11.88H204.073L203.713 15.36C204.3 15.9733 204.86 16.6 205.393 17.24C205.953 17.8533 206.54 18.5333 207.153 19.28L205.073 21.6C204.46 20.72 203.873 19.9333 203.313 19.24L201.193 39.2H197.913L200.433 16.76C199.873 19.1867 199.233 21.56 198.513 23.88C197.793 26.2 196.927 28.48 195.913 30.72ZM212.393 33.4C212.607 34.3067 212.887 34.96 213.233 35.36C213.58 35.7333 214.007 35.92 214.513 35.92C215.02 35.92 215.5 35.6933 215.953 35.24C216.407 34.76 216.7 33.8667 216.833 32.56L219.273 8.8H211.753C211.327 9.94667 210.86 11.0933 210.353 12.24C209.847 13.3867 209.287 14.5467 208.673 15.72L205.673 14.48C206.98 12.16 208.033 9.85333 208.833 7.56C209.633 5.24 210.327 2.92 210.913 0.599998L214.193 1.24C214.007 1.90667 213.807 2.58667 213.593 3.28C213.407 3.94667 213.207 4.62667 212.993 5.32H219.633C220.727 5.32 221.513 5.64 221.993 6.28C222.5 6.89333 222.687 7.73333 222.553 8.8L219.993 33.04C219.78 35.04 219.233 36.5867 218.353 37.68C217.473 38.7733 216.167 39.32 214.433 39.32C211.74 39.32 210.047 37.6533 209.353 34.32L212.393 33.4ZM215.033 20.56C215.407 22.1867 215.7 23.8667 215.913 25.6C216.127 27.3067 216.247 28.84 216.273 30.2L213.553 30.68C213.527 29.8 213.46 28.84 213.353 27.8C211.94 28.2267 210.513 28.6533 209.073 29.08C207.633 29.5067 206.167 29.8933 204.673 30.24L204.033 27.28C204.62 27.1467 205.22 27 205.833 26.84C206.927 24.7333 207.873 22.5733 208.673 20.36C209.473 18.1467 210.153 15.9867 210.713 13.88L213.513 14.76C212.98 16.6267 212.38 18.5067 211.713 20.4C211.073 22.2933 210.353 24.1333 209.553 25.92C210.113 25.76 210.687 25.6 211.273 25.44C211.86 25.2533 212.433 25.08 212.993 24.92C212.913 24.3067 212.82 23.6933 212.713 23.08C212.607 22.44 212.487 21.8133 212.353 21.2L215.033 20.56Z" />
      <path d="M244.865 34.36H241.545L242.025 29.92H236.025L236.345 26.92H242.345L242.665 23.72H238.145L238.465 20.72H242.985L243.305 17.84H239.025L239.345 14.88H243.625L243.945 11.96H237.785L238.105 8.96H244.225L244.585 5.8H240.425L240.745 2.84H244.905L245.145 0.479997H248.465L248.225 2.84H251.305C253.305 2.84 254.199 3.85333 253.985 5.88L253.665 8.96H255.465L255.145 11.96H253.305L252.665 17.84H246.625L246.305 20.72H252.425L252.105 23.72H245.985L245.665 26.92H252.905L252.585 29.92H245.345L244.865 34.36ZM228.345 16.76L234.785 5.48L229.465 5.44L229.785 2.24L236.265 2.28C237.439 2.28 238.199 2.62666 238.545 3.32C238.892 4.01333 238.745 4.92 238.105 6.04L233.545 14.08H234.665C235.572 14.08 236.265 14.32 236.745 14.8C237.252 15.28 237.439 16.04 237.305 17.08C237.039 19.2667 236.612 21.5067 236.025 23.8C235.465 26.0933 234.639 28.3733 233.545 30.64C234.665 32.48 236.119 33.7867 237.905 34.56C239.692 35.3067 241.772 35.68 244.145 35.68C245.719 35.68 247.199 35.5067 248.585 35.16C249.972 34.8133 251.159 34.3333 252.145 33.72L253.345 36.92C252.199 37.5867 250.785 38.1333 249.105 38.56C247.452 38.9867 245.799 39.2 244.145 39.2C241.772 39.2 239.519 38.7733 237.385 37.92C235.252 37.0667 233.425 35.64 231.905 33.64C231.292 34.6267 230.612 35.5867 229.865 36.52C229.145 37.48 228.332 38.4267 227.425 39.36L225.265 36.76C226.279 35.8 227.172 34.8 227.945 33.76C228.745 32.72 229.452 31.6667 230.065 30.6C229.505 29.3733 229.025 28.0133 228.625 26.52C228.252 25 227.999 23.32 227.865 21.48L230.985 21.12C231.145 23.2 231.452 25.04 231.905 26.64C232.465 25.12 232.905 23.5733 233.225 22C233.572 20.4267 233.852 18.8533 234.065 17.28H231.705L231.065 18.44L228.345 16.76ZM250.865 5.8H247.905L247.545 8.96H250.545L250.865 5.8ZM249.905 14.88L250.225 11.96H247.265L246.945 14.88H249.905Z" />
      <path d="M283.698 34.48L283.298 38.08H258.498L258.898 34.48H268.978L271.938 6.28H262.978L263.378 2.68H286.138L285.738 6.28H275.938L272.978 34.48H283.698Z" />
      <path d="M317.25 26.64L316.89 29.96H290.65L291.01 26.64H295.05L297.65 1.76H312.45C313.49 1.76 314.25 2.04 314.73 2.6C315.21 3.13333 315.41 3.86666 315.33 4.8L312.93 26.64H317.25ZM300.41 8.2H311.49L311.81 5H300.73L300.41 8.2ZM299.77 14.16H310.85L311.17 11.2H300.09L299.77 14.16ZM299.09 20.4H310.17L310.53 17.16H299.45L299.09 20.4ZM298.45 26.64H309.53L309.85 23.4H298.77L298.45 26.64ZM292.13 39.32L290.53 36.44C292.263 35.56 293.863 34.64 295.33 33.68C296.823 32.72 298.17 31.7333 299.37 30.72L301.33 33.24C300.05 34.28 298.65 35.2933 297.13 36.28C295.636 37.2667 293.97 38.28 292.13 39.32ZM307.85 30.84C309.13 31.9067 310.436 32.8933 311.77 33.8C313.103 34.68 314.516 35.5467 316.01 36.4L313.97 39.2C312.423 38.3467 310.983 37.4667 309.65 36.56C308.343 35.6533 307.023 34.6133 305.69 33.44L307.85 30.84Z" />
    </svg>
  );
}
