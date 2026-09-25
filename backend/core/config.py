from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Accessibility AI"

    class Config:
        env_file = ".env"


settings = Settings()
