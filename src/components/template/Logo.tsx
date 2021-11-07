import styles from "../../styles/Logo.module.css";
interface LogoProps {}

export const Logo = (props: LogoProps) => {
  return (
    <div
      className={`bg-white h-10 w-10 rounded-full  flex flex-col items-center justify-center`}
    >
      <div
        className={`h-3 w-3 rounded-full mb-0.5 ${styles.circuleAnimate} ${styles.one}`}
      />
      <div className={`flex mt-0.5`}>
        <div
          className={`h-3 w-3 rounded-full  mr-0.5 ${styles.circuleAnimate} ${styles.three}`}
        />
        <div
          className={`h-3 w-3 rounded-full  ml-0.5 ${styles.circuleAnimate} ${styles.two}`}
        />
      </div>
    </div>
  );
};
