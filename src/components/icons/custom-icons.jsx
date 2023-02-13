
export const CustomIcon = (props) => {
  const {style,name} = props;
  switch (name) {
    case 'pin':
      return (
      <svg  height="15" width="15" preserveAspectRatio="xMidYMid meet" ><path fill="currentColor" class="grey" d="M12.074 4.21 8.7 8.232l.116 4.233a.4.4 0 0 1-.657.318L.43 6.297a.4.4 0 0 1 .199-.702l4.196-.622L8.196.957a.63.63 0 0 1 .887-.078l2.914 2.445a.63.63 0 0 1 .077.887ZM1.294 14.229a.713.713 0 0 1-1.09-.915l2.674-3.64 1.536 1.288-3.12 3.267Z"></path></svg>     
      )
    case 'dropdown':
      return (
        <svg style={style} viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><path fill="currentColor" d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path></svg>
      )
  }
}