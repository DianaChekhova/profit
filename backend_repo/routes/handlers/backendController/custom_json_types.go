package backendController

import (
	"encoding/json"
	"time"
)

type JSONDuration time.Duration

func (d JSONDuration) MarshalJSON() ([]byte, error) {
	return json.Marshal(time.Duration(d).String()) // Преобразование в строку
}

func (d *JSONDuration) UnmarshalJSON(data []byte) error {
	var str string
	if err := json.Unmarshal(data, &str); err != nil {
		return err
	}
	duration, err := time.ParseDuration(str)
	if err != nil {
		return err
	}
	*d = JSONDuration(duration)
	return nil
}
