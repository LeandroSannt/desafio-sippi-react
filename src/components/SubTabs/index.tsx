import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./styles.module.scss";

import CreateGlobalStyle from "./styles";

interface Props {
  subTabs: boolean;
  main: Array<string>;
  subMain?: Array<string>;
  component: Array<JSX.Element>;
  secondSubMain?: Array<string>;
  secondComponent?: Array<JSX.Element>;
  thirdSubMain?: Array<string>;
  thirdComponent?: Array<JSX.Element>;
  fourthSubMain?: Array<string>;
  fourthComponent?: Array<JSX.Element>;
}

const TabsContainer: React.FC<Props> = ({
  subTabs,
  main,
  subMain,
  component,
  secondSubMain,
  secondComponent,
  thirdSubMain,
  thirdComponent,
  fourthSubMain,
  fourthComponent,
}) => {
  return (
    <>
      {subTabs ? (
        <>
          <CreateGlobalStyle />
          <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList className={styles.content_first}>
              {main.map((item) => {
                return <Tab className={styles.tablist}>{item}</Tab>;
              })}
            </TabList>

            <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList className={styles.content}>
                  {subMain
                    ? subMain.map((item) => {
                        return <Tab className={styles.tablist}>{item}</Tab>;
                      })
                    : null}
                </TabList>

                {component.map((item) => {
                  return <TabPanel>{item}</TabPanel>;
                })}
              </Tabs>
            </TabPanel>

            <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList className={styles.content}>
                  {secondSubMain
                    ? secondSubMain.map((item) => {
                        return <Tab className={styles.tablist}>{item}</Tab>;
                      })
                    : null}
                </TabList>

                {secondComponent
                  ? secondComponent.map((item) => {
                      return <TabPanel>{item}</TabPanel>;
                    })
                  : null}
              </Tabs>
            </TabPanel>

            <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList className={styles.content}>
                  {thirdSubMain
                    ? thirdSubMain.map((item) => {
                        return <Tab className={styles.tablist}>{item}</Tab>;
                      })
                    : null}
                </TabList>

                {thirdComponent
                  ? thirdComponent.map((item) => {
                      return <TabPanel>{item}</TabPanel>;
                    })
                  : null}
              </Tabs>
            </TabPanel>

            <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList className={styles.content}>
                  {fourthSubMain
                    ? fourthSubMain.map((item) => {
                        return <Tab className={styles.tablist}>{item}</Tab>;
                      })
                    : null}
                </TabList>

                {fourthComponent
                  ? fourthComponent.map((item) => {
                      return <TabPanel>{item}</TabPanel>;
                    })
                  : null}
              </Tabs>
            </TabPanel>
          </Tabs>
        </>
      ) : (
        <>
          <CreateGlobalStyle />
          <Tabs>
            <TabList className={styles.content_first_unic_tab}>
              {main.map((item) => {
                return <Tab className={styles.tablist}>{item}</Tab>;
              })}
            </TabList>

            {component
              ? component.map((item) => {
                  return <TabPanel>{item}</TabPanel>;
                })
              : null}
          </Tabs>
        </>
      )}
    </>
  );
};

export default TabsContainer;
