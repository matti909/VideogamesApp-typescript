import { Ring } from "@uiball/loaders";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.container_loader}>
      <Ring size={40} lineWeight={5} speed={2} color="green" />
    </div>
  );
};
