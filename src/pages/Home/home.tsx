import React, { useState, useEffect } from "react";
import "./style.css";
import Intro from "@assets/images/intro.svg";
import { Button, Input, Progress } from "antd";

const Home: React.FC = () => {
  const [percentLoading, setPercentLoading] = useState<number>(0);
  useEffect(() => {
    const delayLoading = setInterval(() => {
      if (percentLoading < 100) {
        setPercentLoading(percentLoading + 40);
      }
      else{
        setPercentLoading(100)
      }
    }, 400);
    if (percentLoading == 100) {
      clearInterval(delayLoading);
    }
    return () => {
      clearInterval(delayLoading);
    };
  }, [percentLoading]);
  return (
    <div className="onboarding-home">
      <div className="image-intro">
        <img src={Intro} alt="err" width={300} />
      </div>
      {percentLoading == 100 ? (
        <div className="user-input-email">
          <Input.Group compact>
            <Input
              style={{ width: "500px" }}
              placeholder="Nhập địa chỉ email của bạn"
            />
            <Button type="primary">Đăng nhập</Button>
          </Input.Group>
        </div>
      ) : (
        <div className="loading-onboarding">
          <Progress percent={percentLoading} />
        </div>
      )}
    </div>
  );
};
export default Home;
