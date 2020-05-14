import React from "react";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Social = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
    <FontAwesomeIcon icon={['fab', 'github']} />
    <FontAwesomeIcon icon={['fab', 'twitter']} />
    <FontAwesomeIcon icon={ faEnvelope } />
  </div>
);